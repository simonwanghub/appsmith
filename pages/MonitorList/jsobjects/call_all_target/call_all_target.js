export default {
	search_my_orders: () => {
			return(get_all_target.run().then(
				(res)=>res.data
			))
	}
}