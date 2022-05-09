import axios from 'axios';
import React,{Component} from 'react';

class App extends Component {

      state = {
        selectedFile: null
        };
        onFileChange = e => {
        this.setState({ selectedFile: e.target.files[0] });
      };
	
	onFileUpload = () => {
	const formData = new FormData();
	
	formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
	);
	
	// console.log(this.state.selectedFile);
	
        axios.post("/uploadfile", formData);
        };
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
      <h1>FIle Upload and & get Details</h1>
        <h3>Name: {this.state.selectedFile.name}</h3>
        <h3>Type: {this.state.selectedFile.type}</h3>
        <p>Last Modified:{" "}		{this.state.selectedFile.lastModifiedDate.toDateString()}	</p>
		</div>
		);
	} 
	};
	
	render() {
	
	return (
		<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>Upload!	</button>
		{this.fileData()}
		</div>
	);
	}
}

export default App;
