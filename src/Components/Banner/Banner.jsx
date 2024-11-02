import bannerImage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> Books to freshen up your bookself</h1>
      <p className="py-6">
       
      </p>
      <button className="btn bg-green-700 rounded-2xl p-4">View The List </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;