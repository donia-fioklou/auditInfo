const MenuAside = () => {
    return (
        <div
        id="kt_app_sidebar"
        className="app-sidebar flex-column flex-shrink-0"
        data-kt-drawer="true"
        data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="auto"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
      >
        {/*begin::Sidebar secondary menu*/}
        <div
          className="card py-5 bg-gray-200"
          data-kt-sticky="true"
          data-kt-sticky-name="app-sidebar-menu-sticky"
          data-kt-sticky-offset="{default: false, xl: '500px'}"
          data-kt-sticky-width="250px"
          data-kt-sticky-left="auto"
          data-kt-sticky-top="100px"
          data-kt-sticky-animation="false"
          data-kt-sticky-zindex={95}
        >
          <div
            className="hover-scroll-y mx-2 px-1 px-lg-2"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_app_header, #kt_app_footer"
            data-kt-scroll-wrappers="#kt_app_toolbar"
            data-kt-scroll-offset="5px"
          >
            <div
              id="kt_app_sidebar_menu"
              data-kt-menu="true"
              className="menu menu-sub-indention menu-rounded menu-column menu-active-bg menu-title-gray-600 menu-icon-gray-500 menu-state-primary menu-arrow-gray-500 fw-semibold fs-6"
            >
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu content*/}
                <div className="menu-content">
                  <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                    Home
                  </span>
                </div>
                {/*end:Menu content*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link active" href="index.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Default</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/ecommerce.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">eCommerce</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/projects.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Projects</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a
                  className="menu-link"
                  href="dashboards/online-courses.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Online Courses</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/marketing.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Marketing</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/bidding.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Bidding</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/pos.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">POS System</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/call-center.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Call Center</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/logistics.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Logistics</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a
                  className="menu-link"
                  href="dashboards/website-analytics.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Website Analytics</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a
                  className="menu-link"
                  href="dashboards/finance-performance.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Finance Performance</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a
                  className="menu-link"
                  href="dashboards/store-analytics.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Store Analytics</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/social.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Social</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/delivery.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Delivery</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/crypto.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Crypto</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/school.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">School</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="dashboards/podcast.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Podcast</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="landing.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Landing</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
            </div>
          </div>
        </div>
        {/*end::Sidebar secondary menu*/}
      </div>
    )
}
export default MenuAside;