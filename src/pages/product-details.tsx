import { CarouselButtonType, MyntraCarousel, Slider, useRating } from "6pp";
import { useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import RatingsComponent from "../components/ratings";
import { FaRegStar, FaStar, FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const data = [
  {
    key: "1",
    url: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png",
  },
  {
    key: "2",
    url: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png",
  },
];

const ProductDetails = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewSubmitLoading, setReviewSubmitLoading] = useState(false);
  const reviewDialogRef = useRef<HTMLDialogElement>(null);

  const decrement = () => setQuantity((prev) => prev - 1);
  const increment = () => {};

  const addToCartHandler = () => {};

  const {
    Ratings: RatingsEditable,
    rating,
    setRating,
  } = useRating({
    IconFilled: <FaStar />,
    IconOutline: <FaRegStar />,
    value: 0,
    selectable: true,
    styles: {
      fontSize: "1.75rem",
      color: "coral",
      justifyContent: "flex-start",
    },
  });

  const reviewCloseHandler = () => {
    reviewDialogRef.current?.close();
    setRating(0);
    setReviewComment("");
  };

  const submitReview = async () => {};

  const showDialog = () => {
    reviewDialogRef.current?.showModal();
  };

  const handleDeleteReview = async () => {};

  return (
    <div className="product-details">
      <main>
        <section>
          <Slider
            showThumbnails
            showNav={false}
            onClick={() => setCarouselOpen(true)}
            images={data.map((i) => i.url) || []}
          />
          {carouselOpen && (
            <MyntraCarousel
              NextButton={NextButton}
              PrevButton={PrevButton}
              setIsOpen={setCarouselOpen}
              images={data.map((i) => i.url) || []}
            />
          )}
        </section>
        <section>
          <code>category</code>
          <h1>name</h1>
          <em style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <RatingsComponent value={5} />
            (numOfReviews reviews)
          </em>
          <h3>$price</h3>
          <article>
            <div>
              <button onClick={decrement}>-</button>
              <span>{quantity}</span>
              <button onClick={increment}>+</button>
            </div>
            <button onClick={() => addToCartHandler()}>Add To Cart</button>
          </article>
          <p>description</p>
        </section>
      </main>

      <dialog ref={reviewDialogRef} className="review-dialog">
        <button onClick={reviewCloseHandler}>X</button>
        <h2>Write a Review</h2>
        <form onSubmit={submitReview}>
          <textarea
            value={reviewComment}
            onChange={(e) => setReviewComment(e.target.value)}
            placeholder="Review..."
          ></textarea>
          <RatingsEditable />
          <button disabled={reviewSubmitLoading} type="submit">
            Submit
          </button>
        </form>
      </dialog>

      <section>
        <article>
          <h2>Reviews</h2>
          <button onClick={showDialog}>
            <FiEdit />
          </button>
        </article>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            overflowX: "auto",
            padding: "2rem",
          }}
        >
          <ReviewCard
            handleDeleteReview={handleDeleteReview}
            userId={"user"}
            key={"1"}
            review={"hihihihi"}
          />
        </div>
      </section>
    </div>
  );
};

const ReviewCard = ({
  review,
  userId,
  handleDeleteReview,
}: {
  userId?: string;
  review: any;
  handleDeleteReview: (reviewId: string) => void;
}) => (
  <div className="review">
    <RatingsComponent value={5} />
    <p>comment</p>
    <div>
      <img
        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_.png"
        alt="User"
      />
      <small>name</small>
    </div>
    <button onClick={() => handleDeleteReview(review._id)}>
      <FaTrash />
    </button>
  </div>
);

const NextButton: CarouselButtonType = ({ onClick }) => (
  <button onClick={onClick} className="carousel-btn">
    <FaArrowRightLong />
  </button>
);
const PrevButton: CarouselButtonType = ({ onClick }) => (
  <button onClick={onClick} className="carousel-btn">
    <FaArrowLeftLong />
  </button>
);

export default ProductDetails;
