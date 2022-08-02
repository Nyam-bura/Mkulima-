class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendors = [];
    this.products = [];
    this.addFarm = (farmId, name, farmer, phone, address) => {
    this.farms.push({farmId,name,farmer,phone,address})}
    this.removeFarm = (farmId) => {
    let Item = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(Item);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let variableFarm = this.farms.find(item => item.farmId ===farmId)
    variableFarm.farmId =newFarmId;
    variableFarm.farmName =newFarmName;
    variableFarm.farmer =newFarmerName;
    variableFarm.phone =newPhone;
    variableFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))}
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})}
    this.removeProduct = (productId) => {
    let variable = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(variable);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let variableProduct = this.product.find(item => item.productId ===productId)
    variableProduct.productId =newProductId;
    variableProduct.productName = newProductName;
    variableProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))}
    this.printProducts = ()=>{
    console.log(this.product)}
    this.calculateOrderCost = (productId,quantity)=>{
    let variableProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${variableProduct.productName} for KES ${quantity*variableProduct.price}`);
    }
    }
    }
    let farm1 = new Mkulima();
    farm1.addFarm("345","Jane","Ndung'u","0113544192", "JN988");
    farm1.addFarm("783","Alice","Wambui","0725274384", "AW7362");
    farm1.addFarm("194","Stanley","Gitung'o","0729837078", "SG093");
    console.log(farm1.farms);
    farm1.removeFarm("783")
