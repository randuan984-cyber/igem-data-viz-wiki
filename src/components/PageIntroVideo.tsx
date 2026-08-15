import { useCallback, useEffect, useRef, useState } from 'react';

const VIDEO_SRC = `${import.meta.env.BASE_URL}assets/images/home/1.mp4`;

/**
 * 页面/栏目切换过场动画：全屏播放几秒后淡出，再展示目标内容。
 * - 视频播完或超过 4.5 秒兜底自动淡出
 * - 尊重 prefers-reduced-motion（直接跳过）
 * - 播放期间锁定页面滚动，结束后恢复
 */
export default function PageIntroVideo() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const finishedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const fadeOut = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setHidden(true);
    timerRef.current = window.setTimeout(() => {
      setGone(true);
      document.body.style.overflow = '';
    }, 650);
  }, []);

  useEffect(() => {
    if (gone) return;

    document.body.style.overflow = 'hidden';
    // 兜底：无论视频是否正常播放，最多 4.5 秒后进入站点
    timerRef.current = window.setTimeout(fadeOut, 4500);

    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      document.body.style.overflow = '';
    };
  }, [gone, fadeOut]);

  if (gone) return null;

  return (
    <div className={`page-intro-overlay${hidden ? ' is-hidden' : ''}`} aria-hidden="true">
      <video
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
        onEnded={fadeOut}
        onError={fadeOut}
      />
    </div>
  );
}
