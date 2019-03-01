const STORES = [
	{
		name: "Tom Thumb",
		address: '1380 W Campbell Rd, Richardson, TX 75080',
		image: require('../../assets/shops/thumb.jpg')
	},
	{
		name: "Walmart",
		address: '15757 N Coit Rd, Dallas, TX 75248',
		image: require('../../assets/shops/wm.png')
	},
	{
		name: "Target",
		address: '16731 Coit Rd, Dallas, TX 75248',
		image: require('../../assets/shops/target.jpg')
	},
	{
		name: "Sprouts",
		address: '1343 W Campbell Rd, Richardson, TX 75080',
		image: require('../../assets/shops/sprouts.gif')
	},
	{
		name: "HMart",
		address: '3320 K Ave, Plano, TX 75074',
		image: require('../../assets/shops/hmart.jpg')
	},
	{
		name: "Saigon Mall",
		address: '3320 K Ave, Plano, TX 75074',
		image: require('../../assets/shops/saigon.jpg')
	},
	{
		name: "Costco Wholesale",
		address: '3800 N Central Expy, Plano, TX 75074',
		image: require('../../assets/shops/costco.jpg')
	},
	{
		name: "Whole Foods",
		address: '1411 E Renner Rd, Richardson, TX 75082',
		image: require('../../assets/shops/wf.jpg')
	}
]

const FETCH_STORES = 'FETCH_STORES';

const storesReducer = (state=[], action) => {
	switch (action.type) {
		case FETCH_STORES:
			return action.payload
		default:
			return state
	}
}

export default storesReducer;