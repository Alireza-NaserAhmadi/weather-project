class Storeg{
    constructor(){
        this.state;
        this.city;
        this.difaultCity='زنجان';
        this.difaultStat='زنجان';
    }

    getLocationData(){
        if(localStorage.getItem('city')===null){
            this.city=this.difaultCity;
        }else{
            this.city= localStorage.getItem('city');
        }
    
        if(localStorage.getItem('state')===null){
            this.state=this.difaultStat;
        }else{
            this.state= localStorage.getItem('state');
        }

        return{
            city:this.city,
            state:this.state
        }

        
    }
    
    setLocationDate(city , state){
        localStorage.setItem('city',city);
        localStorage.setItem('state', state);
    }
}