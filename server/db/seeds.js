use guests;
db.dropDatabase();

db.guestbook.insertMany([
	{
		name: "Richard Trist",
		email: 'ricky@gmail.com'

	},

	{
		name: "Graham Henderson",
		email: "Ghenderson@gmail.com"

	},
	{
		name: "Graham Henderson",
		email: "Ghenderson@gmail.com"

	},
	{
		name: "Kelly Hanson",
		email: "Khanson@gmail.com"

	},

	{
		name: "Billy James",
		email: "BillJ.com"

	}

	//
	// {
	// 	name: "Sara Hanson",
	// 	email: "sarah@gmail.com"
	//
	// },

	// {
	// 	name: "Kelly Brook",
	// 	email: "kellyB@gmail.com"
	//
	// }
]);
