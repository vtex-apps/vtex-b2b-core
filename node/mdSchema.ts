export default [
  {
    name: 'b2b_bo_config',
    version: 'v0.0.1',
    body: {
      properties: {
        customerId: {
          type: 'string',
          title: 'Customer Id',
        },
        sellers: {
          type: 'array',
          items: {
            type: 'string',
          },
          title: 'Sellers',
        },
        categories: {
          type: 'array',
          items: {
            type: 'string',
          },
          title: 'Categories',
        },
      },
      'v-indexed': ['customerId'],
      'v-cache': false,
    },
  }
]
