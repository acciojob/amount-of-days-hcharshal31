function dayOfYear(year){
	if(year%4 == 0){
		return 366;
	} else {
		return 365;
	}
}