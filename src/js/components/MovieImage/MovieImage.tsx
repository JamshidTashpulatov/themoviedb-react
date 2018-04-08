import * as React from "react";
import Classnames from "classnames";
import Styles from "./MovieImage.pcss";
type MovieImageState = {
  img_error: boolean,
  img_loaded: boolean,
  img_error: boolean
};
class MovieImage extends React.Component<{}, MovieImageState> {
  constructor() {
    super();
    this.state = {
      img_loaded: false,
      img_error: false
    };
  }
  handleImageError() {
    this.setState({
      img_error: true
    });
  }
  render() {
    const imageClasses = Classnames({
      [Styles.image]: true,
      [Styles.loaded]: this.state.img_loaded
    });
    const containerClasses = Classnames({
      [Styles.container]: true,
      [Styles.large]: this.props.size === "original",
      [Styles.medium]: this.props.size === "w300",
      [Styles.small]: this.props.size === "w45"
    });
    return (
      <div className={containerClasses}>
        {!this.state.img_loaded &&
          !this.state.img_error && <div className={Styles.loader} />}
        {!this.state.img_error ? (
          <img
            onLoad={() =>
              this.setState({
                img_loaded: true
              })
            }
            onError={() => this.handleImageError()}
            className={imageClasses}
            src={this.props.imageBaseUrl + this.props.size + this.props.path}
            alt=""
          />
        ) : (
          <div className={`${Styles.noimage} material-icons`}>broken_image</div>
        )}
      </div>
    );
  }
}
export default MovieImage;