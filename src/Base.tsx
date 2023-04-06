import styles from './Base.module.css';

function Home(props: any) {
  return (
    <>
      <div className="row">
        <h1 className={styles.h1}>Home Page</h1>
        <div className="col">
          <img
            className={styles.img}
            src="./JoelHiltonHeadshot.jpg"
            alt="Joel's Head"
          />
        </div>
        <div className="col">
          <h2>Hilton's Movie Collection</h2>
          <p>
            This is a website that displays the movie collection beloning to
            Joel Hilton.
          </p>
          <p>Navigate to the Movies to see what he has.</p>
          <p>Navigate to Podcast for a link to Baconsale.com</p>
        </div>
      </div>
    </>
  );
}

export default Home;
