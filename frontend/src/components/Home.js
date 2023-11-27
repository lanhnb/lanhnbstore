
import Products from "./Products";
import FeatureSmall from "./featruSmall";
import FeatureProducts from "./featureProduct";



const Home = ()=>{
   
    return(
        <>
        
        <Products/>
        <div className="w3 d-none d-sm-block">
        <FeatureProducts/>
        </div>
        <div className="w3 d-sm-block d-sm-none">
        <FeatureSmall/>
        </div>
        
     
        
        </>
    )
}


export default Home;
