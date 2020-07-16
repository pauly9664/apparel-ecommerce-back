const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
//const DashboardPage = require('./dashboard-page')

const User = require('./models/user');
const sales = require('./models/sales');
const products = require('./models/images');
const contacts = require('./models/contact');
const items = require('./models/items');
const cart = require('./models/cart');
const bookings = require('./models/bookings');
const categories = require('./models/productCategories');

AdminBro.registerAdapter(AdminBroMongoose)
const ADMIN = {
  email: 'test@example.com',
  password: 'password',
}
const adminBro = new AdminBro({
  rootPath: '/admin',
  // dashboard: {
  //   component: AdminBro.bundle('./imageUpload.jsx')
  // },
  resources: [User, sales, products, contacts, items, cart, bookings, categories],
  branding: {
    // logo: 'http://localhost:500/uploads/preetiLoo1.png',
    companyName: 'Preeti Fashions Admin',
    softwareBrothers: true   // if Software Brothers logos should be shown in the sidebar footer
  },
//   dashboard: {
//     handler: async () => {
//     },
//     component: AdminBro.bundle('./my-dashboard-component')
//   },
})

module.exports = adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  },
  cookieName: 'adminbro',
  cookiePassword: 'somePassword',
})

