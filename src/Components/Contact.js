import React from 'react'
import './Contact.css'
import HoverButton from "./HoverButton.js"
import 'aos/dist/aos.css';
import gitimage from "../images/github-circle.svg"
import linkedinimage from "../images/linkedin.svg"

class About extends React.Component {

    render() {
        return <div id='contact' >
            <div >
                <h1 data-aos="slide-left" data-aos-duration="1250">CONTACT</h1>
            </div>

            <div className="information">
            <p className = "text-status">I'm actively looking for Summer Internship opportunities[Jun - Sep 2024] in the fields of Data Science and Software Development.
                     If you find me to be a good fit for your organisation, kindly please reach out to me here: </p></div>
                <div className="social" >

                <a href="mailto:meghasrisatyasaid@gmail.com">
                         <svg viewBox="0 0 32 32">
                        <path d="M30.996 7.824v17.382a2.044 2.044 0 0 1-2.044 2.044h-4.773V15.663L16 21.799l-8.179-6.136v11.588H3.049a2.044 2.044 0 0 1-2.044-2.044V7.824A3.067 3.067 0 0 1 5.92 5.376l-.008-.006L16 12.937 26.088 5.37a3.067 3.067 0 0 1 4.907 2.454z" />
                    </svg>
                                </a>
                        <a href="https://www.linkedin.com/in/meghadevineni/" target="_blank">
                        <svg viewBox="0 0 24 24">
                        <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                    </svg>
                        </a>
                        <a href='https://github.com/meghsat/' target="_blank">
          <svg className='svg-icons' viewBox="0 0 24 24" >
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,
                    20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,
                    15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,
                    16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,
                    7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,
                    7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,
                    17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg> </a>
                        <a href="https://www.behance.net/srisatyasai" target="_blank">
                         <svg
                            fill="#000000"
                            height="50px"
                            width="50px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="-15.875 21.975 32 20.275"
                            xmlSpace="preserve"
                        >
                            <path d="M-1.188 24.087c0.6 0.838 0.9 1.85 0.9 3.025 0 1.2 -0.3 2.175 -0.912 2.913 -0.338 0.412 -0.85 0.787 -1.512 1.125 1.012 0.375 1.775 0.95 2.288 1.75 0.512 0.8 0.775 1.762 0.775 2.9 0 1.175 -0.287 2.225 -0.887 3.15 -0.375 0.613 -0.838 1.137 -1.4 1.55 -0.625 0.487 -1.375 0.813 -2.237 1 -0.863 0.175 -1.788 0.263 -2.8 0.263H-15.875V21.975h9.563c2.4 0.037 4.112 0.738 5.125 2.112zm-10.75 1.325v4.362H-7.125c0.863 0 1.55 -0.163 2.087 -0.487s0.8 -0.912 0.8 -1.738c0 -0.925 -0.35 -1.525 -1.063 -1.825 -0.613 -0.2 -1.387 -0.313 -2.337 -0.313h-4.3zm0 7.625v5.275H-7.125c0.863 0 1.525 -0.113 2 -0.35 0.875 -0.438 1.3 -1.25 1.3 -2.462 0 -1.025 -0.412 -1.738 -1.262 -2.125 -0.475 -0.212 -1.125 -0.325 -1.975 -0.338h-4.875zm24.238 -5.612c1.025 0.45 1.863 1.175 2.525 2.163 0.6 0.863 0.988 1.875 1.163 3.025 0.1 0.675 0.15 1.637 0.125 2.9H5.463c0.063 1.462 0.563 2.5 1.525 3.087 0.588 0.362 1.288 0.55 2.112 0.55 0.863 0 1.575 -0.225 2.125 -0.675 0.3 -0.237 0.563 -0.575 0.787 -1.012h3.9c-0.1 0.863 -0.575 1.75 -1.413 2.65 -1.313 1.425 -3.138 2.138 -5.5 2.138 -1.95 0 -3.663 -0.6 -5.15 -1.8 -1.488 -1.2 -2.237 -3.15 -2.237 -5.85 0 -2.538 0.675 -4.475 2.013 -5.825C4.975 27.425 6.713 26.75 8.85 26.75c1.288 -0.013 2.438 0.212 3.45 0.675zm-5.713 3.3c-0.537 0.563 -0.875 1.313 -1.025 2.263h6.588c-0.075 -1.012 -0.412 -1.788 -1.012 -2.313 -0.613 -0.525 -1.375 -0.787 -2.275 -0.787 -0.975 0 -1.738 0.287 -2.275 0.838zm6.463 -7.825H4.575v2.462h8.475v-2.462z" />
                        </svg>
                        </a>

                        <a href="https://www.codechef.com/users/megh_sat" target="_blank">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M11.257.004c-.37.01-.735.04-1.1.095-.54.054-1.08.325-1.675.595-.757.324-1.515.649-2.218.703-1.19.378-1.568.919-1.892 1.351 0 .054-.054.108-.054.108-.433.865-.487 1.73-.325 2.595.162.541.378 1.029.54 1.515.38 1.028.758 2 .92 3.136.163.325.324.757.432 1.19.27.865.542 1.838 1.353 2.595l.006-.003c.017.019.03.04.048.057l.021-.01-.02-.584c.648-.974 1.566-1.623 2.864-1.893.52-.11 1.081-.15 1.663-.128a8.773 8.773 0 0 1 1.798.236c1.46.378 2.595 1.136 2.65 1.785.027.354.04.695.032 1.036 0 .064-.004.128-.007.193l.136.068a.639.639 0 0 0 .206-.19l.003-.003.006-.008c.04-.054.075-.124.11-.194.02-.037.038-.086.056-.129.205-.462.362-1.153.538-1.963.054-.27.11-.487.163-.703.433-.973 1.027-1.838 1.622-2.65.973-1.35 1.892-2.595 1.784-4.055-1.784-3.461-4.272-4.002-5.57-4.272-.216-.054-.323-.054-.485-.108-1.338-.244-2.494-.396-3.605-.365zM16.3 14.383a9.86 9.86 0 0 0-.032-.983c-.054-.703-1.19-1.46-2.704-1.838a9.536 9.536 0 0 0-1.744-.236 6.761 6.761 0 0 0-1.555.128c-1.244.27-2.216.92-2.811 1.892l.051 1.431c.667-.355 1.733-.874 3.14-1 .065-.005.136-.005.204-.009.117-.013.266-.044.444-.044 1.607 0 3.268.534 4.877 1.648.039-.274.06-.549.07-.823l.045.023c.002-.063.014-.127.015-.19zM11.256.058c.124-.004.254.01.379.011-.23-.002-.459.003-.687.016.103-.006.205-.024.308-.027zm.498.015zM10.44.13c-.076.009-.153.013-.229.024-.817.117-1.774.701-2.75 1.045.355-.132.714-.296 1.075-.45.54-.27 1.135-.541 1.621-.595.094-.014.189-.013.283-.024zm-.229.24c.162 0 .379 0 .541.054a.995.995 0 0 0-.37-.014 1.174 1.174 0 0 1 .316.068c.58 1-.426 5.279-.679 8.149a57.37 57.37 0 0 0 .463 2.72c-.703-1.784-1.406-4.921-1.515-7.354-.054-.973.001-1.839.218-2.487C9.4.855 9.725.423 10.21.369zm3.136.27c-.81 2.11-.918 6.11-.972 7.354-.054.54 0 1.73.054 2.595 0 .216.054.432.054.649 0-.217-.054-.379-.054-.595-.433-3.244-.974-7.136.918-10.002zm3.352.379c-.27 2.162-1.405 3.19-1.783 5.3-.108 1.676-.325 3.622-.379 5.298-.054-1.676 0-3.46.27-5.245.27-1.838.865-3.677 1.892-5.353zM6.32 1.45zm.21.197a.856.856 0 0 1 .6.236l-.014-.007c.133.092.266.209.393.384-.204.968.255 3.032.04 4.67.076 1.548.071 3.18.849 4.459-.98-1.51-1.176-3.438-1.322-5.236-.113-1.09-.204-2.097-.464-2.903-.144-.305-.269-.575-.384-.822-.024-.037-.044-.079-.07-.114a.582.582 0 0 1-.162-.377c0-.054.053-.162.108-.162.054-.054.161-.056.215-.11a1.013 1.013 0 0 1 .21-.018zm-1.347.613c-.06.02-.092.041-.14.061.177-.034.362.034.52.318-.188.892.436 3.369.428 5.104.313 1.848.55 3.85 1.572 5.115-1.19-1.351-1.676-3.73-2.054-5.731-.325-1.568-.596-2.92-1.136-3.352-.054-.108-.108-.163-.108-.271 0-.162 0-.379.108-.595-.277.634-.405 1.267-.37 1.901a3.844 3.844 0 0 1 .37-1.901c0-.054.054-.054.054-.108.012-.016.031-.035.044-.051a.878.878 0 0 1 .226-.257c.055-.061.096-.12.159-.182-.053.056-.088.11-.134.165.027-.018.052-.037.084-.052a.49.49 0 0 1 .377-.164zm-.377.164c-.004.007-.008.01-.012.018l.037-.03-.025.012zm14.76 1.134-.005.015c.038-.005.075-.017.113-.015-.037-.002-.076.01-.115.02-.863 2.642-1.887 5.284-2.911 7.926a.018.018 0 0 1-.002.003c-.087.465-.234.884-.54 1.19.433-.487.486-1.191.54-2.056.054-.811.054-1.676.487-2.542 0-.053.001-.105.053-.159l.001-.002c.097-.353.202-.689.317-1.018.418-1.29 1.14-3.166 2.013-3.34.016-.006.034-.019.05-.022zM8.374 16.21l-.324.108c.162.217.27.38.378.433a.784.784 0 0 0 .379.108c.054 0 .161 0 .215-.054l.812-.27c.054 0 .108-.054.162-.054.108 0 .162 0 .27.054l.271.27.27-.054c-.108-.162-.27-.323-.378-.377-.108-.054-.217-.11-.379-.11h-.108l-.866.325h-.161c-.109 0-.216 0-.27-.054-.054-.054-.163-.162-.271-.325zm-2.596.541c-.27.162-.649.433-1.19.649-.54.216-.973.433-1.19.649-.215.216-.323.432-.323.649 0 .108.054.163.162.217.054.054.163.054.217.108a27.9 27.9 0 0 1 2.216 1.08c.109.054.217.163.272.217.054.054.107.054.161.054.109 0 .27-.053.378-.162.108-.108.163-.217.163-.325 0-.108-.055-.161-.163-.215 0 0-.433-.217-1.19-.541a11.967 11.967 0 0 1-1.188-.595c.162-.27.486-.487.973-.703.54-.216.92-.433 1.081-.595.054-.054.054-.108.054-.162a.412.412 0 0 0-.108-.217.415.415 0 0 0-.27-.108zm11.247 0a.408.408 0 0 0-.216.108c-.054.108-.109.163-.109.217v.054c.162.162.38.27.704.378.27.054.54.163.811.217.324.108.54.27.649.486v.055c0 .054-.109.162-.325.27-.108.054-.325.217-.595.433-.27.162-.433.323-.595.377-.216.109-.378.217-.432.326-.054.054-.054.107-.054.161 0 .108.054.108.108.216s.162.11.216.11c.054 0 .108-.056.162-.056.27-.162.65-.378 1.082-.757.486-.378.865-.648 1.082-.81.216-.108.323-.217.323-.38 0-.053 0-.161-.108-.215-.378-.433-.918-.702-1.567-.919-.108-.054-.27-.109-.595-.163-.162-.054-.325-.108-.433-.108zm-2.974.81c-.27 0-.487.056-.649.218-.216.162-.27.432-.216.757 0 .27.108.486.27.703.162.216.379.325.595.325.162 0 .27-.056.433-.11.27-.162.379-.432.379-.918 0-.379-.109-.649-.271-.81a.915.915 0 0 0-.541-.164zm-4.488.055c-.27 0-.486.055-.648.217-.217.162-.27.432-.216.757 0 .27.107.486.27.702s.378.326.594.326c.163 0 .271-.056.433-.11.27-.162.378-.432.378-.918 0-.433-.108-.703-.27-.81a.915.915 0 0 0-.54-.164zm0 .65c.163 0 .271.108.271.27 0 .162-.163.27-.27.27-.163 0-.27-.108-.27-.27s.107-.27.27-.27zm4.38.054c.162 0 .271.107.271.27 0 .108-.109.27-.27.27-.163 0-.27-.108-.27-.27 0-.163.107-.27.27-.27zm-2.703 2.108.162.324a.947.947 0 0 0 .216.271c.054.054.163.162.27.162h.109c.108 0 .161 0 .215-.054.054-.054.164-.054.218-.108l.161-.162c.054-.054.108-.109.108-.163.054-.054.054-.108.108-.162 0-.054.054-.108.054-.108-.054.108-.162.216-.216.324-.108.054-.161.163-.27.163-.107.054-.216.054-.324.054s-.216 0-.27-.054c-.108 0-.163-.054-.217-.108l-.162-.163c-.054-.054-.108-.162-.162-.216zm-.866 1.028c-1.136 0-1.838 1.514-3.46.162-.432 2.65 2.758 2.866 4.11 1.73.92-.81.648-1.946-.65-1.892zm2.866 0c-1.297-.054-1.568 1.082-.648 1.893 1.351 1.135 4.54.918 4.108-1.731-1.622 1.352-2.27-.162-3.46-.162z"/></svg>
                        </a>
                        <a href="https://stackoverflow.com/users/10472512/megh-sat" target="_blank">
<svg fill="#000000" width="800px" height="800px" viewBox="-4 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-stackoverflow"><path d='M13.492 18.136v-5.272h1.665v7.022H.13v-7.022h1.665v5.272z'/><path d='M3.632 12.364l8.173 1.795.346-1.727-8.173-1.796-.346 1.728zm1.082-4.091l7.567 3.704.692-1.59-7.568-3.728-.691 1.614zm2.097-3.91l6.421 5.614 1.06-1.34L7.87 3.022l-1.06 1.34zM10.962.206L9.622 1.25l4.973 7.045 1.34-1.045L10.962.205zM3.46 16.364h8.346v-1.75H3.46v1.75z'/></svg>
                        </a>
 
                        <a href="https://www.credly.com/users/megha-sri-satya-sai-devineni/badges" target="_blank">
  <svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path cx="512" cy="512" r="512" style={{ fill: '#f36c21' }} d="M100 50A50 50 0 0 1 50 100A50 50 0 0 1 0 50A50 50 0 0 1 100 50z" />
<path d="M65.547 36.289h0.293c0.361 0.029 0.723 0.205 0.947 0.488 0.332 0.41 0.42 0.957 0.449 1.475 0.078 1.572 -0.264 3.135 -0.713 4.639 -0.576 1.992 -1.387 3.906 -2.051 5.869 -0.117 0.342 -0.234 0.693 -0.322 1.045 -0.146 0.586 -0.127 1.201 -0.146 1.807 -0.02 0.566 0.02 1.133 0.127 1.689 0.059 0.303 0.186 0.625 0.42 0.84 0.215 0.195 0.527 0.283 0.811 0.195 0.381 -0.117 0.684 -0.41 0.957 -0.693 0.381 -0.42 0.742 -0.85 1.006 -1.348 0.371 -0.664 0.586 -1.396 0.693 -2.148 0.146 -1.133 0.264 -2.285 0.674 -3.359 0.156 -0.41 0.352 -0.83 0.723 -1.084 0.498 -0.352 1.25 -0.205 1.631 0.264 0.186 0.234 0.234 0.537 0.234 0.82 -0.02 0.381 -0.098 0.762 -0.225 1.123 -0.439 1.289 -0.693 2.646 -0.645 4.014 0.01 0.313 0.039 0.645 0.205 0.928 0.137 0.234 0.371 0.42 0.645 0.42 0.313 0 0.586 -0.186 0.781 -0.41 0.303 -0.342 0.547 -0.732 0.742 -1.143 0.391 -0.83 0.576 -1.738 0.742 -2.637 0.137 -0.762 0.273 -1.523 0.488 -2.266 0.117 -0.381 0.264 -0.762 0.547 -1.055 0.186 -0.205 0.469 -0.283 0.732 -0.283 0.273 0.01 0.527 0.166 0.713 0.371 0.254 0.283 0.303 0.674 0.273 1.035 -0.273 2.158 -0.576 4.316 -0.82 6.475 -0.176 1.348 -0.332 2.695 -0.449 4.043 -0.01 0.146 0.166 0.234 0.264 0.137 0.703 -0.674 1.396 -1.377 1.924 -2.197 0.244 -0.371 0.42 -0.771 0.654 -1.143 0.098 -0.166 0.215 -0.332 0.4 -0.391 0.283 -0.137 0.645 -0.098 0.889 0.098 0.186 0.137 0.283 0.361 0.313 0.586v0.264c-0.059 0.449 -0.322 0.83 -0.518 1.221 -0.537 1.074 -1.279 2.051 -2.207 2.822 -0.664 0.566 -1.445 0.996 -2.266 1.289 -0.049 0.02 -0.127 0.029 -0.137 0.098 -0.303 1.24 -0.977 2.383 -1.885 3.271 -1.006 0.996 -2.305 1.68 -3.682 2.002 -0.752 0.166 -1.543 0.234 -2.305 0.098 -0.781 -0.146 -1.543 -0.508 -2.1 -1.074 -0.508 -0.508 -0.85 -1.182 -0.908 -1.904 -0.059 -0.654 0.107 -1.318 0.42 -1.895 0.361 -0.654 0.908 -1.201 1.553 -1.582 0.615 -0.371 1.318 -0.547 2.012 -0.635 0.791 -0.088 1.602 -0.088 2.402 -0.02 0.498 0.039 0.996 0.088 1.494 0.127 0.273 0.02 0.576 0.117 0.84 -0.02 0.186 -0.088 0.244 -0.313 0.273 -0.498 0.117 -0.879 0.293 -1.768 0.186 -2.666 -0.02 -0.117 -0.049 -0.293 -0.195 -0.303 -0.176 0.078 -0.264 0.264 -0.361 0.42 -0.303 0.586 -0.869 1.035 -1.523 1.162 -0.654 0.127 -1.367 -0.205 -1.67 -0.791 -0.146 -0.244 -0.215 -0.537 -0.43 -0.742 -0.146 -0.137 -0.361 -0.137 -0.537 -0.059 -0.313 0.137 -0.518 0.42 -0.771 0.635 -0.664 0.596 -1.504 1.045 -2.412 1.094 -1.055 0.068 -2.139 -0.527 -2.578 -1.504 -0.059 -0.137 -0.107 -0.332 -0.283 -0.352 -0.195 -0.029 -0.342 0.127 -0.449 0.264 -0.518 0.654 -1.006 1.357 -1.689 1.846 -0.439 0.313 -0.967 0.527 -1.514 0.518 -0.576 -0.01 -1.152 -0.322 -1.426 -0.83 -0.127 -0.225 -0.176 -0.508 -0.381 -0.684 -0.156 -0.137 -0.4 -0.117 -0.566 -0.01 -0.254 0.146 -0.4 0.41 -0.605 0.615 -0.566 0.566 -1.387 0.85 -2.178 0.771 -0.957 -0.098 -1.826 -0.762 -2.178 -1.66 -0.049 -0.127 -0.117 -0.273 -0.254 -0.313 -0.107 -0.039 -0.195 0.039 -0.264 0.107 -0.527 0.488 -1.055 0.986 -1.689 1.328 -0.645 0.342 -1.357 0.566 -2.09 0.547 -0.771 0.01 -1.543 -0.225 -2.168 -0.664 -0.527 -0.361 -0.947 -0.869 -1.191 -1.465 -0.068 -0.156 -0.156 -0.332 -0.332 -0.371 -0.156 -0.039 -0.293 0.078 -0.381 0.195 -0.264 0.371 -0.605 0.693 -0.986 0.938 -0.586 0.381 -1.27 0.645 -1.982 0.645 -0.547 0 -1.094 -0.205 -1.484 -0.586 -0.42 -0.41 -0.645 -0.986 -0.732 -1.563 -0.107 -0.752 0.049 -1.514 0.264 -2.227 0.137 -0.469 0.313 -0.918 0.42 -1.396 0.059 -0.244 0.078 -0.508 -0.029 -0.732 -0.088 -0.176 -0.273 -0.283 -0.449 -0.361 -0.195 -0.078 -0.4 0.029 -0.537 0.156 -0.137 0.127 -0.205 0.293 -0.283 0.459 -0.479 1.152 -1.123 2.236 -1.914 3.203 -0.762 0.938 -1.67 1.748 -2.646 2.461 -1.113 0.791 -2.393 1.367 -3.75 1.553 -0.986 0.137 -2.012 0.059 -2.969 -0.225 -0.566 -0.166 -1.123 -0.4 -1.611 -0.742 -0.84 -0.586 -1.514 -1.396 -1.992 -2.295 -0.371 -0.693 -0.654 -1.436 -0.859 -2.197 -0.283 -1.084 -0.381 -2.197 -0.43 -3.311v-0.762c0.02 -0.82 0.098 -1.641 0.264 -2.441 0.293 -1.455 0.82 -2.852 1.533 -4.15 0.566 -1.016 1.24 -1.973 2.09 -2.764 0.928 -0.869 2.051 -1.543 3.291 -1.816 1.182 -0.264 2.451 -0.195 3.555 0.313 0.332 0.146 0.625 0.361 0.977 0.469 0.244 0.078 0.527 0.049 0.732 -0.107 0.313 -0.244 0.459 -0.635 0.723 -0.928 0.332 -0.361 0.869 -0.508 1.338 -0.371 0.439 0.127 0.781 0.508 0.889 0.947 0.068 0.293 0.029 0.596 -0.059 0.879 -0.137 0.4 -0.361 0.762 -0.576 1.123 -0.713 1.23 -1.25 2.559 -1.592 3.936 -0.107 0.42 -0.195 0.859 -0.361 1.26 -0.156 0.381 -0.4 0.742 -0.752 0.977 -0.303 0.205 -0.703 0.303 -1.064 0.195 -0.332 -0.098 -0.586 -0.371 -0.723 -0.684 -0.156 -0.332 -0.205 -0.713 -0.156 -1.084 0.098 -0.869 0.576 -1.66 0.596 -2.549 0.02 -0.498 -0.146 -1.016 -0.537 -1.338 -0.547 -0.469 -1.318 -0.596 -2.012 -0.498 -0.82 0.107 -1.592 0.498 -2.197 1.055 -0.654 0.605 -1.143 1.367 -1.533 2.158 -1.133 2.266 -1.631 4.863 -1.338 7.383 0.098 0.82 0.293 1.641 0.684 2.383 0.244 0.469 0.566 0.889 0.967 1.221 0.518 0.43 1.143 0.723 1.807 0.85 0.947 0.186 1.943 0.059 2.832 -0.283 1.191 -0.459 2.227 -1.279 3.047 -2.246 0.439 -0.498 0.82 -1.045 1.191 -1.602 0.371 -0.518 0.762 -1.064 0.908 -1.699 0.098 -0.42 0.01 -0.85 -0.088 -1.26 -0.068 -0.566 0.146 -1.143 0.518 -1.563 0.234 -0.244 0.527 -0.469 0.869 -0.537 0.322 -0.059 0.684 0 0.957 0.205 0.303 0.215 0.459 0.625 0.352 0.986 -0.068 0.234 -0.146 0.479 -0.078 0.723 0.068 0.205 0.273 0.332 0.479 0.342 0.469 0.039 0.957 -0.049 1.406 0.107 0.527 0.205 0.996 0.625 1.172 1.182 0.117 0.371 0.156 0.791 0.039 1.162 -0.205 0.723 -0.459 1.436 -0.596 2.178 -0.039 0.244 -0.078 0.498 -0.01 0.742 0.039 0.176 0.195 0.332 0.381 0.342 0.322 0.029 0.615 -0.146 0.84 -0.361 0.459 -0.459 0.762 -1.045 0.977 -1.65 0.264 -0.732 0.4 -1.504 0.596 -2.256 0.205 -0.771 0.518 -1.523 1.006 -2.158 0.723 -0.957 1.895 -1.572 3.105 -1.543 0.674 0.01 1.338 0.273 1.816 0.762 0.4 0.41 0.615 0.967 0.703 1.533 0.146 0.957 -0.029 1.963 -0.469 2.832 -0.605 1.191 -1.846 2.041 -3.184 2.148 -0.195 0.02 -0.42 0.01 -0.566 0.156 -0.127 0.127 -0.117 0.322 -0.098 0.488 0.049 0.449 0.195 0.908 0.498 1.26 0.352 0.361 0.879 0.615 1.396 0.498 0.596 -0.127 1.104 -0.508 1.523 -0.918 0.4 -0.4 0.752 -0.85 1.074 -1.318 0.449 -0.645 0.723 -1.387 0.996 -2.109 0.264 -0.713 0.508 -1.436 0.947 -2.061 0.352 -0.527 0.811 -0.986 1.357 -1.318 0.605 -0.381 1.328 -0.576 2.051 -0.537 0.225 0.01 0.479 0.02 0.664 -0.117 0.166 -0.127 0.225 -0.352 0.225 -0.557 0 -0.371 0.039 -0.732 0.068 -1.104 0.049 -0.576 0.098 -1.152 0.176 -1.719 0.166 -1.426 0.459 -2.832 0.84 -4.209 0.195 -0.693 0.449 -1.396 0.889 -1.982 0.186 -0.264 0.41 -0.518 0.703 -0.674 0.283 -0.166 0.645 -0.156 0.947 -0.068 0.391 0.117 0.645 0.488 0.801 0.84 0.283 0.693 0.205 1.465 0.146 2.197 -0.078 1.152 -0.352 2.285 -0.586 3.418 -0.205 0.996 -0.371 2.002 -0.557 2.998 -0.254 1.367 -0.498 2.744 -0.752 4.111 -0.215 1.123 -0.459 2.266 -0.322 3.418 0.039 0.303 0.078 0.635 0.283 0.869 0.146 0.166 0.391 0.205 0.586 0.137 0.264 -0.088 0.449 -0.322 0.586 -0.557 0.322 -0.547 0.605 -1.123 0.889 -1.699 0.41 -0.801 0.82 -1.631 0.957 -2.529 0.215 -1.367 0.361 -2.754 0.557 -4.131 0.156 -1.025 0.332 -2.051 0.498 -3.066 0.205 -1.279 0.439 -2.549 0.801 -3.789 0.176 -0.586 0.41 -1.162 0.82 -1.621 0.371 -0.371 0.811 -0.635 1.299 -0.684zM46.68 47.637c-0.195 0.059 -0.352 0.215 -0.479 0.371 -0.283 0.361 -0.498 0.771 -0.645 1.211 -0.156 0.469 -0.303 0.957 -0.244 1.445 0.01 0.146 0.156 0.254 0.293 0.254 0.264 0.01 0.498 -0.137 0.703 -0.293 0.459 -0.322 0.752 -0.82 0.957 -1.328 0.127 -0.322 0.215 -0.674 0.186 -1.025 -0.02 -0.234 -0.137 -0.479 -0.342 -0.596 -0.127 -0.078 -0.293 -0.088 -0.43 -0.039zm8.369 1.094c-0.547 0.098 -1.035 0.42 -1.387 0.85 -0.381 0.459 -0.645 1.016 -0.781 1.602 -0.205 0.83 -0.225 1.709 0 2.539 0.068 0.254 0.186 0.508 0.381 0.693 0.127 0.127 0.303 0.195 0.479 0.205 0.459 0.068 0.889 -0.186 1.24 -0.449 0.439 -0.322 0.723 -0.801 0.898 -1.309 0.107 -0.313 0.039 -0.645 0.01 -0.967 -0.049 -0.654 -0.049 -1.309 -0.01 -1.963 0.01 -0.225 0.078 -0.439 0.078 -0.664 0 -0.176 -0.068 -0.371 -0.234 -0.469 -0.205 -0.127 -0.449 -0.107 -0.674 -0.068zm13.057 11.68c-0.469 0.029 -0.938 0.127 -1.377 0.313 -0.479 0.195 -0.889 0.557 -1.094 1.025 -0.137 0.293 -0.195 0.645 -0.049 0.938 0.146 0.303 0.42 0.527 0.723 0.664 0.42 0.186 0.889 0.215 1.328 0.166 1.387 -0.156 2.705 -0.869 3.584 -1.953 0.176 -0.215 0.313 -0.459 0.459 -0.693 0.039 -0.078 0.098 -0.205 0.01 -0.273 -0.107 -0.078 -0.244 -0.049 -0.361 -0.049 -0.498 -0.029 -0.996 -0.078 -1.494 -0.098 -0.576 -0.029 -1.152 -0.078 -1.729 -0.039z"/>
</svg></a>                    </div>
                
            


        </div>
    }
}

export default About;
