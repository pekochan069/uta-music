import { css } from "styled-system/css";
import { hstack, vstack } from "styled-system/patterns";

type VideoItemProps = {
  channel: string;
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
};

export default (props: VideoItemProps) => {
  return (
    <div class={vstack({ gap: 0 })}>
      <img
        src={props.thumbnailUrl}
        class={css({
          aspectRatio: "16 / 9",
          objectFit: "cover",
          width: 64,
          maxWidth: "45%"
        })}
      />
      <div class={vstack()}>
        <h3>{props.title}</h3>
        <p>{props.channel}</p>
      </div>
    </div>
  );
};
