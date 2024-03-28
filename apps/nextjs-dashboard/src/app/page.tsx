import styles from './page.module.scss';


export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="flex items-center w-full h-screen bg-gray-100">
        <div className="p-4">
          Welcome
        </div>
        <div className={styles.shape} />
      </div>
    </div>
  );
}
