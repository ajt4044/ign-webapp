import CustomHead from '../components/CustomHead'
import SubHeader from '../components/SubHeader';
import styles from '../styles/Home.module.scss';
import MainVideo from '../components/MainVideo';
import InfoForCurrentVideo from '../components/InfoForCurrentVideo';
import VideoList from '../components/VideoList';

export default function Home() {
  const topicArray = ["Elden Bling", "The Dripper: Wild Hunt", "CyberSlung", "Assassin's Fit: Griddy"]
  const currentTopic = 0; // The position in the array
  const videoArray = ["vid1", "vid2", "vid3"];
  const currentVideo = videoArray[0];
  const titleText = "stuff";

  return (
    <div className={styles.container}>
      <CustomHead />

      <SubHeader
        topicArray={topicArray}
      />
      <div className={styles.content}>

        <div className={styles.VideoTextCont}>
          <div className={styles.mainVideoCont}>
            <MainVideo />
          </div>
          <div className={styles.textContentCont}>
            <InfoForCurrentVideo />
          </div>
        </div>

        <div className={styles.videoListCont}>
          <VideoList
            videoArray={videoArray}
          />
        </div>

      </div>

    </div>
  )
}
