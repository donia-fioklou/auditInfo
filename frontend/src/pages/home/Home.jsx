import Footer from "../../components/Footer";
import MenuAside from "../../components/MenuAside";
import Header from "../../components/Header";

const Home = () => {
    return (
        <>
  {/*begin::App*/}
  <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
    {/*begin::Page*/}
    <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
      {/*begin::Header*/}
      <Header/>
      {/*end::Header*/}
      {/*begin::Wrapper*/}
      <div
        className="app-wrapper flex-column flex-row-fluid"
        id="kt_app_wrapper"
      >
        {/*begin::Wrapper container*/}
        <div className="app-container container-fluid d-flex">
          {/*begin::Sidebar*/}
            <MenuAside/>
          {/*end::Sidebar*/}
          {/*begin::Main*/}
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            {/*begin::Content wrapper*/}
            <div className="d-flex flex-column flex-column-fluid">
              {/*begin::Toolbar*/}
              <div id="kt_app_toolbar" className="app-toolbar pt-7 pt-lg-10">
                {/*begin::Toolbar wrapper*/}
                <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
                  {/*begin::Page title*/}
                  <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
                    {/*begin::Breadcrumb*/}
                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7">
                      {/*begin::Item*/}
                      <li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                        <a href="index.html" className="text-hover-primary">
                          <i className="ki-outline ki-home text-gray-700 fs-6" />
                        </a>
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className="breadcrumb-item">
                        <i className="ki-outline ki-right fs-7 text-gray-700" />
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                        Account
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className="breadcrumb-item">
                        <i className="ki-outline ki-right fs-7 text-gray-700" />
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className="breadcrumb-item text-gray-500 mx-n1">
                        Overview
                      </li>
                      {/*end::Item*/}
                    </ul>
                    {/*end::Breadcrumb*/}
                    {/*begin::Title*/}
                    <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
                      eCommerce Dashboard
                    </h1>
                    {/*end::Title*/}
                  </div>
                  {/*end::Page title*/}
                  
                </div>
                {/*end::Toolbar wrapper*/}
              </div>
              {/*end::Toolbar*/}
              {/*begin::Content*/}
              <div id="kt_app_content" className="app-content">
                {/*begin::Row*/}
                <div className="row gy-5 g-xl-10">
                  
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Content*/}
            </div>
            {/*end::Content wrapper*/}
            {/*begin::Footer*/}
            <Footer/>
          </div>
          {/*end:::Main*/}
        </div>
        {/*end::Wrapper container*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Page*/}
  </div>
  {/*end::App*/}
</>

    )
}
export default Home;