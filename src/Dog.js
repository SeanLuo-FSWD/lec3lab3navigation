import { Component } from "react";
import axios from "axios";

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  fetchPhotos() {
    console.log("55555555555555555");
    const breed = this.props.match.params.breed;
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then((Response) => {
      this.setState({ images: Response.data.message });
    });
  }
  componentDidMount() {
    this.fetchPhotos();
  }
  componentDidUpdate() {
    this.fetchPhotos();
  }

  render() {
    return (
      <div>
        <h2>{this.props.match.params.breed}</h2>
        <ul>
          {this.state.images.map((imageUrl) => {
            return (
              <li key={imageUrl}>
                <img src={imageUrl} style={{ width: 200 }} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Dog;
