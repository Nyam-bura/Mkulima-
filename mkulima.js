class Mkulima{
    constructor(){
    this.farmer = [];
    this.groceryVendor = [];
    this.product = [];
    this.addFarm = (farmId, name, farmer, phoneNumber, address) => {
    this.farmer.push({farmId,name,farmer,phoneNumber,address})
    }
    this.removeFarm = (farmId) => {
    let specific = this.farmer.find(item => item.farmId ===farmId);
    let farmIndex = this.farmer.indexOf(specific);
    this.farmer.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    
    }
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
    }
    }
    }
    
    let farm1 = new Mkulima();
    farm1.addFarm("897","Musyoka","","0113544192", "KK 897 K");
    farm1.addFarm("774","Mwenda","","03884671882", "KK 774 K");
    farm1.addFarm("124","Musembi","","07893377225", "KN 124 K");
    console.log(farm1.farms);
    
    farm1.removeFarm("124");
