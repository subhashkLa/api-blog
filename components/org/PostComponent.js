import Link from "next/link";
const PostComponent = (props) => {
  return (
    <section class="Self-Repent-section">
      <div class="container-fluid">
        <div class="section-title">
          <h2>{props.name}</h2>
        </div>
        <div class="self-repent-wraper">
          <div class="owl-carousel owl-theme self-repent-slider">
            {props.posts.map((e, index) => (
              <div class="item">
                <div class="repentcontent">
                  <p>
                    {e.content}
                    <a href="#">read more</a>
                  </p>
                  <span>
                    Posted on: {e.createdAt} from {e.country}
                  </span>
                  <i class="fa fa-share"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostComponent;
