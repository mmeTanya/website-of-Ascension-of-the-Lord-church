import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  const styles = {
   div: {
      display: 'flex',
   }}

  return (
    <div style={styles.div}>
      <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;