import React, { Component } from "react";
import axios from "axios";

//style
import styles from "./ImageUpload.module.css";

class ImageUpload extends Component {
  state = {
    selectedFile: null,
  };

  // 이미지 선택 기능
  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  

  // 이미지 업로드 기능
  fileUploadHandler = (e) => {
    e.preventDefault();
    
    const { selectedFile } = this.state;
  
    if (!selectedFile) {
      console.log("파일을 선택해주세요.");
      return;
    }else{
        console.log("파일 선택됨");
    }
  
    if (!this.isValidImageFile(selectedFile)) {
      console.log("유효하지 않은 이미지 파일입니다.");
      return;
    }else{
        console.log("유효한 이미지 파일");
    }
  
    const formData = new FormData();
    formData.append("profileImage", selectedFile); 
  
    axios
      .post("http://www.teamguu.p-e.kr/api/members/profile-image-new", formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log("이미지 업로드 성공");
        console.log(response.data);
        // 업로드된 이미지 URL을 받아와서 필요한 처리를 수행하거나 상태를 업데이트합니다.
        // 예시: this.props.handleImageUpload(response.data.imageUrl);
      })
      .catch((error) => {
        console.log("이미지 업로드 실패");
        console.log(error);
        // 실패 처리 로직을 추가합니다.
      });
  };
  
  isValidImageFile = (file) => {
    const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
  
    return allowedExtensions.includes(fileExtension);
  };

  render() {
    return (
      <div className={styles.imageWrap}>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>업로드</button>
      </div>
    );
  }
}

export default ImageUpload;
