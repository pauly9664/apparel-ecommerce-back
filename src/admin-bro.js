const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
//const DashboardPage = require('./dashboard-page')

const User = require('./models/user');
const sales = require('./models/sales');
const products = require('./models/images');
const contacts = require('./models/contact');
const items = require('./models/items');

AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [User, sales, products, contacts, items],
  branding: {
    // logo: 'http://localhost:500/uploads/preetiLoo1.png',
    companyName: 'Preeti Fashions',
    softwareBrothers: true   // if Software Brothers logos should be shown in the sidebar footer
  },
//   dashboard: {
//     handler: async () => {
//     },
//     component: AdminBro.bundle('./my-dashboard-component')
//   },
})

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)
