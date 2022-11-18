import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  const formatTime = (duration) => {
    let miliseconds = Math.floor((duration % 1000) / 100);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    return (
      <>
        {hours}:{minutes}:{seconds}.{miliseconds}
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div>{formatTime(time)}</div>
    </div>
  );
};

export default Timer;
