import { forwardRef } from "react";

const CustomKit = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 28 25"
      ref={ref}
      {...props}
    >
      <path
        d="M0.53548 18.0692C0.933977 18.0941 1.33247 18.1003 1.73097 18.1439C1.81814 18.1502 1.93022 18.2436 1.96758 18.3245C2.11079 18.6296 2.24777 18.9409 2.35985 19.2647C2.39098 19.3581 2.37853 19.5138 2.31626 19.5823C2.06098 19.8998 1.77456 20.1925 1.50682 20.4976C1.27021 20.7653 1.27644 20.9832 1.5255 21.2385C2.01739 21.7366 2.51551 22.2285 3.01363 22.7204C3.28137 22.9819 3.48685 22.9882 3.77949 22.7391C4.09082 22.4714 4.38346 22.1912 4.70102 21.9297C4.76951 21.8736 4.91272 21.8549 4.99366 21.8861C5.31122 21.9981 5.62877 22.1289 5.93387 22.2783C6.02104 22.3219 6.12066 22.4402 6.12689 22.5336C6.17047 22.9384 6.1767 23.3493 6.20783 23.754C6.23897 24.1152 6.39463 24.2584 6.74954 24.2584C7.44691 24.2584 8.15051 24.2584 8.8541 24.2584C9.22769 24.2584 9.37713 24.1027 9.40203 23.7291C9.42694 23.3306 9.43317 22.9321 9.47675 22.5398C9.4892 22.4465 9.5826 22.3219 9.676 22.2783C9.9811 22.1289 10.3049 22.0231 10.61 21.8736C10.7532 21.8051 10.8341 21.8238 10.94 21.9234C11.2326 22.1974 11.5253 22.4651 11.8304 22.7204C11.93 22.8076 12.0545 22.8636 12.204 22.957C12.3472 22.8636 12.5028 22.8014 12.6149 22.6955C13.1068 22.2223 13.58 21.7366 14.0595 21.2572C14.3334 20.9832 14.3397 20.7591 14.0844 20.4664C13.8229 20.1676 13.5427 19.8811 13.2936 19.5698C13.2313 19.4951 13.2189 19.3394 13.25 19.246C13.3621 18.9285 13.4929 18.6109 13.6361 18.3058C13.6734 18.2249 13.7855 18.1377 13.8727 18.1253C14.2774 18.0879 14.6883 18.0754 15.0931 18.0505C15.4667 18.0256 15.6223 17.8638 15.6285 17.4964C15.6348 16.799 15.6348 16.0954 15.6285 15.398C15.6285 15.0369 15.4542 14.875 15.0806 14.8563C14.7008 14.8377 14.321 14.8065 13.9412 14.8003C13.7606 14.8003 13.6672 14.7443 13.6049 14.5637C13.5053 14.2586 13.3808 13.966 13.2376 13.6795C13.1691 13.5363 13.1691 13.4429 13.2812 13.3246C13.5613 13.032 13.8353 12.7207 14.1031 12.4156C14.321 12.1665 14.3148 11.9299 14.0844 11.6933C13.5862 11.1889 13.0819 10.6846 12.5776 10.1864C12.3285 9.94362 12.0981 9.94362 11.8366 10.174C11.5751 10.4044 11.3011 10.6285 11.0583 10.8776C10.8715 11.0706 10.7158 11.1204 10.4605 10.971C10.2239 10.8278 9.94374 10.7468 9.68223 10.6534C9.53279 10.6036 9.4643 10.5289 9.4643 10.367C9.45185 9.96853 9.42694 9.57002 9.40203 9.17152C9.38335 8.81661 9.22769 8.65473 8.87278 8.6485C8.16296 8.63605 7.45314 8.63605 6.74331 8.6485C6.39463 8.6485 6.24519 8.79794 6.21406 9.1404C6.18293 9.49531 6.15802 9.85646 6.15802 10.2176C6.15802 10.4853 6.07708 10.6348 5.79688 10.7033C5.54782 10.7655 5.29876 10.8776 5.07461 11.0084C4.88159 11.1142 4.76951 11.0768 4.6263 10.9336C4.36478 10.6784 4.08459 10.4355 3.8044 10.1927C3.50553 9.93117 3.2876 9.93739 3.01363 10.2051C2.52174 10.6908 2.02984 11.1765 1.5504 11.6684C1.28889 11.9361 1.28266 12.1478 1.53172 12.4342C1.79946 12.7393 2.08588 13.0382 2.34117 13.3495C2.39721 13.418 2.41589 13.5612 2.38475 13.6422C2.27268 13.9597 2.11079 14.2648 2.00494 14.5824C1.9489 14.7443 1.86795 14.7878 1.71229 14.7941C1.32625 14.8065 0.933977 14.8314 0.547933 14.8501C0.161889 14.8688 0.00622651 15.0307 0 15.4105C0 16.0892 0 16.7679 0 17.4528C0 17.8575 0.149436 18.0194 0.55416 18.0443L0.53548 18.0692ZM0.933977 15.7903C1.36361 15.7654 1.78701 15.728 2.21041 15.7156C2.54042 15.7031 2.6774 15.5288 2.77702 15.2362C2.94514 14.7505 3.13816 14.2773 3.36232 13.8165C3.53666 13.4492 3.54911 13.3246 3.26892 13.0133C3.00118 12.7144 2.73967 12.4218 2.4906 12.154C2.81438 11.8365 3.12571 11.5252 3.46817 11.1889C3.74836 11.438 4.05969 11.7119 4.36479 11.9984C4.59517 12.2163 4.81932 12.2163 5.10574 12.0793C5.59141 11.8427 6.09576 11.6435 6.60633 11.4567C6.88652 11.357 7.02973 11.2076 7.04219 10.915C7.06086 10.4916 7.08577 10.0619 7.11068 9.60739C7.53408 9.60739 7.9388 9.60115 8.34353 9.61983C8.39334 9.61983 8.48051 9.76305 8.48674 9.844C8.51787 10.2114 8.53655 10.5787 8.549 10.9461C8.56145 11.2201 8.70466 11.357 8.95372 11.4504C9.47675 11.6497 9.99978 11.8552 10.5104 12.0918C10.7781 12.2163 10.9836 12.2101 11.2015 12.0108C11.519 11.7244 11.8366 11.438 12.2102 11.108C12.3596 11.2823 12.4966 11.4567 12.6523 11.6123C12.8079 11.768 12.9823 11.9112 13.1628 12.0731C12.8391 12.4342 12.5589 12.758 12.2725 13.0693C12.0608 13.2935 12.0608 13.5052 12.1915 13.7792C12.4219 14.2648 12.6336 14.7692 12.8142 15.2735C12.9138 15.5475 13.0445 15.7031 13.3434 15.7156C13.7793 15.7343 14.2151 15.7654 14.6572 15.7965V17.1539C14.2463 17.1788 13.854 17.1975 13.4555 17.2162C13.0196 17.2411 12.9387 17.3345 12.7955 17.733C12.6274 18.2124 12.4219 18.6856 12.1977 19.1464C12.0358 19.4889 12.0234 19.6134 12.2849 19.906C12.5589 20.2174 12.8391 20.5225 13.113 20.8276C12.7893 21.1513 12.4779 21.4627 12.1479 21.7989C11.8553 21.5374 11.5564 21.2697 11.2513 20.9957C10.9213 20.703 10.8217 20.7155 10.4232 20.9085C9.9811 21.1264 9.52034 21.307 9.05335 21.4689C8.65485 21.6059 8.56145 21.6744 8.53655 22.0915C8.51164 22.4963 8.48674 22.901 8.46183 23.3182H7.10445C7.07954 22.9197 7.05464 22.5149 7.03596 22.1164C7.01728 21.7055 6.91765 21.6121 6.53784 21.4751C6.0584 21.307 5.57896 21.1078 5.11819 20.8898C4.76328 20.7217 4.63875 20.7093 4.33365 20.9832C4.02855 21.251 3.72345 21.5249 3.38722 21.8238C3.22533 21.6557 3.0759 21.4876 2.92023 21.3381C2.75834 21.1825 2.584 21.0455 2.40343 20.8898C2.73344 20.5162 3.01363 20.1987 3.30628 19.8874C3.51175 19.6632 3.51175 19.4453 3.381 19.1713C3.15061 18.6919 2.95137 18.2 2.7708 17.7019C2.64627 17.3594 2.54664 17.2473 2.16683 17.2286C1.7621 17.2037 1.35115 17.1851 0.92775 17.1664V15.8028L0.933977 15.7903Z"
        fill="currentColor"
      />
      <path
        d="M12.7822 7.41578C13.3612 7.39087 13.7535 7.5403 13.8843 8.16295C13.9154 8.31861 13.9216 8.40579 13.8158 8.51786C13.6352 8.70466 13.4609 8.90391 13.2927 9.10316C13.0748 9.35845 13.0748 9.5826 13.3114 9.82544C13.685 10.2053 14.0648 10.5851 14.4446 10.9587C14.6999 11.2077 14.9179 11.2077 15.1856 10.9711C15.3911 10.7905 15.5841 10.6038 15.7958 10.4294C15.8518 10.3796 15.9577 10.3422 16.02 10.3609C16.7671 10.5726 16.8107 10.6287 16.8419 11.4007C16.8419 11.4692 16.8419 11.5377 16.8481 11.6062C16.8668 12.0234 17.0286 12.1791 17.4458 12.1853C17.807 12.1853 18.1681 12.1853 18.523 12.1853C19.4819 12.1853 19.5068 12.179 19.5255 11.2139C19.5317 10.8466 19.594 10.5726 20.0111 10.5104C20.1045 10.4979 20.1855 10.4107 20.2789 10.3983C20.3785 10.3858 20.503 10.392 20.5778 10.4419C20.7957 10.6037 20.9825 10.803 21.1942 10.9773C21.4557 11.2015 21.6736 11.2015 21.9165 10.9649C22.3025 10.5913 22.6761 10.2115 23.0497 9.83167C23.2925 9.58261 23.2925 9.35845 23.0684 9.09071C22.894 8.88524 22.701 8.69221 22.5267 8.48051C22.4768 8.41824 22.4457 8.29994 22.4706 8.23145C22.7321 7.48427 22.7321 7.48427 23.5229 7.43446C23.5976 7.43446 23.6786 7.43444 23.7533 7.42199C24.1082 7.39709 24.2639 7.24144 24.2701 6.89275C24.2763 6.48803 24.2701 6.07708 24.2701 5.66613C24.2701 4.8131 24.2265 4.7446 23.3672 4.7446C22.9501 4.7446 22.6512 4.6761 22.5765 4.20911C22.5702 4.15307 22.5391 4.09703 22.508 4.05345C22.4084 3.90401 22.4208 3.77948 22.5578 3.64873C22.7384 3.47438 22.9002 3.28137 23.0684 3.08834C23.2925 2.82683 23.2863 2.59022 23.0435 2.34116C22.6761 1.96756 22.3025 1.59399 21.9289 1.22662C21.6799 0.98379 21.4495 0.977558 21.1817 1.20171C20.9763 1.37605 20.7832 1.57531 20.5653 1.7372C20.4968 1.79324 20.3598 1.79947 20.2727 1.77456C20.1045 1.73097 19.9551 1.63135 19.787 1.58154C19.6251 1.53173 19.5442 1.457 19.5442 1.27643C19.5442 1.01491 19.5317 0.753413 19.5068 0.4919C19.4819 0.155668 19.3138 0 18.9775 0C18.4358 0 17.8879 0 17.3462 0C17.0349 0 16.8668 0.168109 16.8419 0.479435C16.8294 0.653777 16.8107 0.828117 16.8232 1.00246C16.8419 1.35114 16.7485 1.59399 16.3562 1.65625C16.2067 1.68116 16.076 1.78078 15.9141 1.84927C15.6588 1.61889 15.3973 1.38228 15.1296 1.15812C14.8992 0.9651 14.6626 0.977559 14.4509 1.18303C14.0586 1.56285 13.6726 1.9489 13.2927 2.33494C13.0561 2.57778 13.0561 2.80193 13.2741 3.05722C13.4422 3.25647 13.6165 3.45572 13.8033 3.64251C13.9154 3.75459 13.9092 3.84175 13.8718 3.99741C13.7348 4.58893 13.3861 4.82554 12.7946 4.72592C12.7261 4.71347 12.6576 4.72591 12.5891 4.73837C12.2342 4.77573 12.091 4.92517 12.0848 5.2863C12.0786 5.75329 12.0848 6.22028 12.0848 6.68727C12.0848 7.27879 12.1906 7.42201 12.7697 7.3971L12.7822 7.41578ZM13.0375 5.68481C13.3363 5.6599 13.6227 5.62877 13.9154 5.62254C14.2018 5.61631 14.3512 5.47933 14.4509 5.21782C14.5941 4.82555 14.7497 4.44573 14.9241 4.06591C15.0424 3.81062 15.0299 3.60515 14.8431 3.39967C14.6501 3.1942 14.4696 2.98249 14.2765 2.77079C14.482 2.57776 14.675 2.39721 14.893 2.19796C15.0735 2.35985 15.2915 2.54665 15.5032 2.74589C15.7211 2.94514 15.9328 2.95137 16.1943 2.82061C16.5492 2.64627 16.9166 2.4906 17.2902 2.36607C17.5828 2.26644 17.726 2.09832 17.7322 1.79945C17.7385 1.52549 17.7572 1.25776 17.7758 0.958888H18.6102C18.6289 1.24531 18.6538 1.53171 18.6662 1.81813C18.6724 2.11078 18.8157 2.26646 19.0958 2.35985C19.4819 2.49061 19.8555 2.64627 20.2228 2.82684C20.4781 2.95137 20.6836 2.9389 20.8891 2.75211C21.1008 2.55286 21.3249 2.36607 21.5429 2.17305C21.7359 2.3723 21.9165 2.55909 22.1219 2.77079C21.9538 2.95758 21.7795 3.17551 21.5865 3.37476C21.3623 3.60514 21.3498 3.82308 21.4931 4.1095C21.6736 4.46441 21.8168 4.83176 21.9476 5.20536C22.041 5.46687 22.1842 5.61631 22.4706 5.62254C22.7508 5.62877 23.031 5.6599 23.3361 5.67858V6.51293C23.0808 6.52538 22.8193 6.53783 22.5578 6.55028C22.1593 6.56896 22.0597 6.66859 21.9351 7.03595C21.8168 7.38464 21.6736 7.72087 21.5117 8.05088C21.3374 8.41201 21.3312 8.52409 21.6051 8.82919C21.7795 9.02221 21.9538 9.22146 22.1468 9.43316C21.9351 9.61996 21.7359 9.79431 21.518 9.98733C21.3312 9.81921 21.107 9.62618 20.8953 9.43316C20.6898 9.24637 20.4781 9.23392 20.2291 9.35845C19.8617 9.53279 19.4881 9.68845 19.1021 9.82544C18.8281 9.92506 18.6787 10.0745 18.6724 10.3734C18.6724 10.6536 18.6413 10.9338 18.6164 11.2326H17.7883C17.7696 10.9524 17.7509 10.6722 17.7447 10.3983C17.7385 10.0932 17.5953 9.92506 17.3026 9.82544C16.929 9.7009 16.5554 9.55146 16.2005 9.37089C15.9266 9.23391 15.7086 9.25259 15.4845 9.46429C15.2852 9.65731 15.0673 9.83789 14.8556 10.0247C14.6563 9.82544 14.4758 9.63864 14.2703 9.43939C14.4633 9.22147 14.6501 8.99731 14.8494 8.79183C15.0486 8.5739 15.0486 8.36219 14.9241 8.10068C14.7497 7.74577 14.6003 7.37842 14.4696 7.00483C14.3699 6.71841 14.2018 6.56898 13.8967 6.56275C13.685 6.56275 13.4671 6.53784 13.2554 6.53784C13.0935 6.53784 13.0312 6.46312 13.0437 6.30123C13.0561 6.10821 13.0437 5.91518 13.0437 5.69102L13.0375 5.68481Z"
        fill="currentColor"
      />
      <path
        d="M16.4258 18.4739C16.4134 21.6557 18.9849 24.2521 22.1667 24.2646C25.3795 24.2833 27.9947 21.6993 28.0009 18.5051C28.0071 15.3171 25.4231 12.7206 22.2289 12.7144C19.0285 12.7019 16.4383 15.2735 16.4258 18.4739ZM27.0669 18.4926C27.0669 21.17 24.8877 23.3431 22.1978 23.3368C19.5266 23.3368 17.3598 21.1638 17.3598 18.4926C17.3598 15.8152 19.5204 13.6546 22.1978 13.6484C24.8877 13.6484 27.0669 15.809 27.0669 18.4926Z"
        fill="currentColor"
      />
      <path
        d="M7.81405 19.7815C9.62597 19.7753 11.1141 18.2809 11.1141 16.4752C11.1141 14.6571 9.61351 13.1627 7.78292 13.169C5.95232 13.1752 4.46419 14.6633 4.47664 16.4939C4.48287 18.3183 5.98346 19.794 7.81405 19.7878V19.7815ZM7.78914 14.0967C9.10917 14.0967 10.1864 15.1739 10.1739 16.4877C10.1614 17.7953 9.09671 18.8475 7.78914 18.8475C6.48158 18.8475 5.41062 17.789 5.40439 16.4877C5.39816 15.1677 6.4629 14.0967 7.78292 14.0967H7.78914Z"
        fill="currentColor"
      />
      <path
        d="M18.1945 8.58619C19.5581 8.58619 20.6851 7.47164 20.6913 6.10803C20.7037 4.7382 19.5643 3.60498 18.1882 3.60498C16.8184 3.60498 15.6976 4.71951 15.6914 6.08312C15.6914 7.45295 16.8184 8.58619 18.1945 8.58619ZM18.1945 4.53272C19.0475 4.53272 19.7573 5.23009 19.7573 6.08312C19.7573 6.92993 19.0537 7.64599 18.2069 7.65221C17.3539 7.65221 16.6441 6.9673 16.6254 6.11426C16.6129 5.25501 17.3228 4.53272 18.1882 4.53272H18.1945Z"
        fill="currentColor"
      />
      <path
        d="M20.7715 15.8962C20.7715 16.2698 20.7715 16.6496 20.7715 17.0543C20.3543 17.0543 19.9683 17.0543 19.5822 17.0543C19.1837 17.0606 19.0219 17.2287 19.0156 17.6334C19.0156 18.1876 19.0156 18.7417 19.0156 19.2959C19.0156 19.7691 19.1713 19.9185 19.6445 19.9248C20.0119 19.9248 20.3792 19.9248 20.7715 19.9248C20.7715 20.3482 20.7715 20.7342 20.7715 21.1202C20.7777 21.5001 20.9458 21.6744 21.3257 21.6744C21.911 21.6806 22.49 21.6744 23.0753 21.6744C23.4676 21.6744 23.6232 21.5063 23.6295 21.1265C23.6295 20.8089 23.6419 20.4851 23.6295 20.1676C23.6232 19.9683 23.698 19.9123 23.8848 19.9248C24.165 19.9372 24.4514 19.9248 24.7316 19.9248C25.2546 19.9248 25.3916 19.7878 25.3978 19.271C25.3978 18.7542 25.3978 18.2436 25.3978 17.7268C25.3978 17.1913 25.2608 17.0543 24.7253 17.0543C24.3704 17.0543 24.0155 17.0543 23.6357 17.0543C23.6357 16.6309 23.6357 16.2511 23.6357 15.8775C23.6357 15.4666 23.4738 15.3109 23.0753 15.3047C22.5025 15.3047 21.9296 15.3047 21.3568 15.3047C20.9396 15.3047 20.7777 15.4728 20.7777 15.8962H20.7715ZM21.7055 17.3968C21.7055 17.0294 21.7055 16.6621 21.7055 16.2636H22.7017C22.7017 16.6247 22.7017 16.9921 22.7017 17.3594C22.7017 17.8451 22.8512 17.9883 23.3244 17.9883C23.6917 17.9883 24.0591 17.9883 24.4451 17.9883V18.9908C24.084 18.9908 23.7291 18.9908 23.3742 18.9908C22.8387 18.9908 22.7079 19.1278 22.7017 19.6632C22.7017 20.0119 22.7017 20.3606 22.7017 20.7218H21.7055C21.7055 20.3482 21.7055 19.987 21.7055 19.6259C21.7055 19.1215 21.5685 18.9908 21.0641 18.9908C20.703 18.9908 20.3481 18.9908 19.9621 18.9908V17.9883C20.3543 17.9883 20.7279 17.9883 21.1077 17.9883C21.556 17.9883 21.6993 17.8389 21.7055 17.3968Z"
        fill="currentColor"
      />
    </svg>
  );
});

CustomKit.displayName = "CustomKit";

export { CustomKit };
