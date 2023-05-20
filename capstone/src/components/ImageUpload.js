import React, {Component} from "react";
import axios from 'axios';

//style
import styles from './ImageUpload.module.css';

class ImageUpload extends Component{
    state = {
        selectedFile: null
    }

    //이미지 선택 기능
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    // //이미지 업로드 기능
    // fileUploadHandler = () => {
    //     const fd = new FormData();
    //     axios.post();
    // }

    render(){
        return(
            <div className={styles.imageWrap}>
                <input type="file" 
                    onChange={this.fileSelectedHandler}
                />
                <button onClick={this.fileUploadHandler}>업로드</button>
            </div>
        );
    }

}

export default ImageUpload;