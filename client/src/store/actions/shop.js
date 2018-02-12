import * as actionTypes from './actionTypes';

export const fetchShopSuccess = (shop) => (
  {
    type: actionTypes.FETCH_SHOP_SUCCESS,
    shop
  }
);

export const fetchShopFail = (error) => (
  {
    type: actionTypes.FETCH_SHOP_FAIL,
    error
  }
);

export const fetchShopStart = () => (
  {
    type: actionTypes.FETCH_SHOP_START
  }
);

export const fetchShop = (slug) => (
  async dispatch => {
    dispatch(fetchShopStart());

    const query = {
      query: `{ getShopBySlug(slug: "${slug}") { name, slug, location { coordinates, address }, photo } }`
    };

    let fetchedShop = await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
    });

    fetchedShop = await fetchedShop.json();
    const shop = fetchedShop.data.getShopBySlug;

    dispatch(fetchShopSuccess(shop));
  }
);
