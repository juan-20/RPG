import React from 'react'
import { CharactersResume, LandingPageComponent } from './styles'

export default function Landing() {
  return (
    <LandingPageComponent>

      <div className="hero-text">
      <h1>A sua ficha de RPG não medieval</h1>
      </div>

      <div className="hero-image">
        <div className="shadow">
        <svg width="90" height="251" viewBox="0 0 90 251" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M61.1967 243.316C60.1911 243.386 59.1623 243.457 58.1801 243.199C57.198 242.942 56.2626 242.264 55.9586 241.305C55.7014 240.487 55.8183 239.411 55.1168 238.943C54.9531 238.827 54.7661 238.78 54.5556 238.756C54.4621 221.616 54.8829 211.724 54.766 194.233C55.6312 188.41 55.1168 183.008 54.9765 177.373C54.5556 159.577 54.158 141.782 53.7371 123.986C53.6903 121.624 53.5968 119.169 52.4276 116.971C50.5334 113.417 46.3243 111.406 42.3723 109.862C30.6334 105.279 17.3511 98.7312 14.1241 113.463C13.2589 117.369 12.5574 121.297 11.9728 125.273C11.5519 128.102 11.2245 131.048 12.2534 133.854C14.0072 138.625 17.2577 150.34 21.3733 153.801C32.1067 162.828 36.7835 173.023 40.3145 184.996C39.2154 188.995 40.5015 194.654 40.9926 197.74C43.2843 212.543 48.008 226.316 50.3231 241.118C49.3409 242.942 48.9199 245.07 49.2005 247.128C49.2473 247.549 49.3408 247.97 49.6214 248.274C50.0189 248.718 50.6737 248.812 51.2583 248.858C52.9186 248.975 54.5789 249.022 56.2392 248.999C57.5253 248.975 58.905 248.858 59.8871 248.017C61.1733 246.941 61.2434 245.023 61.1967 243.316Z" fill="#998675"/>
        <path d="M47.2129 142.086C43.9157 134.813 31.8494 129.926 20.4612 138.227C13.6564 143.185 18.8244 148.704 20.321 153.614C22.1449 159.577 23.3609 165.727 23.9221 171.971C25.0211 184.014 23.7818 196.501 20.1807 209.012C17.7955 217.337 17.7487 226.456 16.0884 234.758C15.1764 239.411 12.2767 245.585 12.9548 250.215C15.5271 250.238 18.0995 250.262 20.6484 250.285C22.9166 250.308 25.3252 250.285 27.2193 249.046C29.1135 247.806 30.0488 244.86 28.4586 243.246C26.8919 243.761 25.2316 244.275 23.6181 243.901C16.5326 242.217 25.7928 226.199 27.1491 222.668C32.925 207.609 38.7009 192.549 42.8867 177.49C45.9734 166.476 51.7494 152.024 47.2129 142.086Z" fill="#998675"/>
        <path d="M49.3876 61.8076C52.1937 68.7059 54.9998 75.5808 57.8059 82.4792C58.5776 84.3733 59.3493 86.3844 58.9751 88.3721C58.3204 91.9031 54.462 93.7973 50.9777 94.5924C44.0794 84.7944 36.8069 75.2535 29.207 65.9933C24.8809 60.7318 18.1463 48.572 28.0846 44.9007C39.3558 40.7617 46.0437 53.5763 49.3876 61.8076Z" fill="#5762D5"/>
        <path d="M74.666 51.3313C75.578 49.9751 76.8875 50.583 78.0334 51.7522C74.8297 63.3509 71.9769 75.043 69.4748 86.8053C68.7031 90.4533 67.7209 94.4754 64.6108 96.5799C63.3013 97.4686 61.7111 97.9128 60.1443 98.1701C57.3148 98.6611 53.9008 98.4039 52.3106 96.0187C50.0424 92.6046 52.8485 89.284 55.0934 86.8988C57.7358 84.1161 58.8582 82.3155 60.4951 78.5272C64.26 69.7815 69.3578 59.282 74.666 51.3313Z" fill="#5762D5"/>
        <path d="M80.0209 50.7935C80.2781 50.4661 80.4186 50.0686 80.5822 49.6711C80.9798 48.6656 81.3772 47.6366 81.7747 46.6311C81.9618 46.1634 82.149 45.6958 82.1724 45.2047C82.1957 44.7136 82.0554 44.1757 81.6812 43.8484C81.3305 43.5444 80.8394 43.4742 80.3717 43.5678C79.904 43.6613 79.5298 43.9186 79.1557 44.1992C78.3372 44.8306 77.6592 45.649 77.1915 46.5844C76.8173 47.3327 76.5835 48.1511 75.9989 48.7357C75.7416 48.993 75.4376 49.2034 75.2037 49.5074C74.853 49.9517 74.7829 50.583 74.9934 51.0975C75.765 52.8046 79.1323 51.9627 80.0209 50.7935Z" fill="#F2D6C9"/>
        <path d="M61.6511 189.283C60.4839 153.206 57.8928 117.23 54.5079 81.3883C53.2707 68.2387 51.7767 52.5939 42.2524 46.4574C33.4284 40.7592 22.5502 39.3094 16.8076 52.1219C13.5862 59.3036 12.8624 68.0026 12.1854 76.4319C8.1236 127.985 4.06183 179.539 0 231.092C4.45868 231.463 57.8228 242.893 58.0562 238.072C58.0562 238.004 58.0562 237.937 58.0562 237.903C58.4064 237.869 58.7331 237.768 59.0366 237.566C60.2272 236.79 60.5773 234.734 60.7874 232.947C62.3514 218.516 62.118 203.849 61.6511 189.283Z" fill="#01153E"/>
        <path d="M83.4123 82.2513C83.1716 72.8418 82.9308 62.7078 83.0184 52.2125C83.1059 42.0792 83.6531 31.9473 84.2658 33.3949C84.7035 34.4806 85.754 72.8415 85.9947 79.7177C86.5856 96.3654 87.1327 113.376 87.658 130.748C88.1832 148.119 88.6647 165.851 89.1243 183.585C89.3869 193.356 90.1966 214.708 89.9558 226.289C89.0586 268.632 86.6075 194.804 86.1698 182.138C85.1193 149.928 84.2658 116.271 83.4123 82.2513Z" fill="#333333"/>
        <path d="M78.2205 78.9483C78.3374 78.6911 78.4309 78.4104 78.5946 78.1766C78.9454 77.6855 79.5533 77.4984 80.1613 77.4283C80.7459 77.3581 81.3539 77.4049 81.9385 77.3114C83.7625 76.984 85.2591 75.1834 87.0831 75.464C87.6443 75.5575 88.1587 75.8381 88.6264 76.1655C89.2344 76.6098 89.7956 77.1945 89.9593 77.9194C90.1932 79.0652 89.3747 80.1642 88.6264 81.0528C88.2055 81.5439 87.7612 82.0583 87.2 82.3623C86.7323 82.6196 86.1945 82.7131 85.6567 82.83C84.3706 83.134 83.0843 83.6018 82.0554 84.4904C81.2136 85.2153 80.5121 86.2208 79.4598 86.478C77.5423 86.9457 75.7417 84.8411 75.5313 83.1106C75.274 81.3334 77.5658 80.4215 78.2205 78.9483Z" fill="#F2D6C9"/>
        <path d="M79.5066 85.0982C78.6647 83.4145 77.8229 81.7309 77.0044 80.0473C74.362 80.4916 72.3744 82.5962 70.4803 84.4669C67.8612 87.0626 65.0317 89.4478 62.0152 91.5991C60.238 92.8619 58.2034 94.0778 56.0521 93.7504C53.433 93.3529 51.7494 90.804 50.3931 88.5124C45.3421 79.8836 40.2911 71.2314 35.2401 62.6026C31.2414 55.7744 26.7749 58.2765 23.8987 64.4032C21.303 69.992 24.6471 76.2824 27.2193 81.3334C30.5399 87.8576 34.2111 94.1947 38.2332 100.345C40.5951 103.946 43.4246 107.734 47.6338 108.693C49.6448 109.161 51.7962 108.904 53.7838 108.319C60.2145 106.495 65.3123 101.701 70.0594 96.9775C73.1227 93.9141 76.1625 90.7806 79.1323 87.6238C79.4597 87.273 79.8105 86.8989 79.8806 86.4079C79.9274 85.987 79.717 85.5191 79.5066 85.0982Z" fill="#5762D5"/>
        <path d="M50.8609 11.0402C49.8086 7.90674 48.1483 4.04834 44.7576 3.2299C41.0863 2.36468 35.895 4.77327 33.2292 7.11169C29.932 9.98796 27.8741 14.0569 26.7283 18.266C25.4655 22.8494 25.2551 27.9471 27.3129 32.2498C29.3707 36.5525 34.071 39.7796 38.7712 39.078C41.9281 38.6104 44.6173 36.5291 46.6751 34.0972C51.96 27.8536 53.4565 18.7571 50.8609 11.0402Z" fill="#F2D6C9"/>
        <path d="M35.0763 22.8025C34.0241 20.9552 30.8437 21.0488 29.9084 22.9429C29.2068 24.346 31.7323 30.0517 32.1065 31.8055C33.0886 36.459 28.0844 68.2149 29.3706 72.8216C21.8642 72.9853 14.2877 72.1668 7.1321 69.8751C6.40719 69.6413 5.63554 69.3607 5.12108 68.7761C4.46633 68.0044 4.4429 66.882 4.48966 65.8764C5.05089 50.817 18.9411 -0.441431 37.6252 0.00287055C39.9168 0.0496391 42.1852 0.564096 44.4301 1.10193C45.9033 1.4527 47.3765 1.85027 48.7094 2.59856C51.422 4.16531 53.1056 7.13511 53.7838 10.1985C54.4853 13.2618 54.2981 16.4421 54.1344 19.5522C54.0877 20.5109 42.8867 19.5287 41.811 19.3651C40.595 19.178 38.3267 18.2193 37.1108 18.7337C35.7077 19.3183 35.544 21.5398 35.0763 22.8025Z" fill="white"/>
        <path opacity="0.19" d="M18.7543 121.344C15.5272 120.712 12.5807 119.146 9.70441 117.579C10.1721 116.176 10.6398 114.773 11.0841 113.37C24.2729 118.117 39.2622 117.696 52.1703 112.224C52.3808 114.446 52.5679 116.667 52.7784 118.889C49.2707 119.637 45.6929 119.917 42.1385 120.221C37.2746 120.619 32.434 121.017 27.57 121.437C24.647 121.671 21.6539 121.905 18.7543 121.344Z" fill="#6E7DAB"/>
        </svg>

        </div>
      </div>

      <CharactersResume>
    
      </CharactersResume>
    </LandingPageComponent>
  )
}
