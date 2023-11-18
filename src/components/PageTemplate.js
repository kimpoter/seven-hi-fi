
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
const PageTemplate = ({children, pageTitle, breadCrumbs}) => {
    return ( 
        <div className="flex flex-1 flex-col px-4 gap-4 xl:px-0 py-5 max-w-[1140px] mx-auto w-full">
            <Breadcrumb  breadCrumbs={breadCrumbs}/>
            <h2 className="text-4xl text-seven-page-heading font-light py-1">
            {pageTitle}
            </h2>
            {children}
            <Footer></Footer>
      </div>
     );
}
 
export default PageTemplate;