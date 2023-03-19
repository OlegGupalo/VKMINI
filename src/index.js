import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { Page, Router, RouterContext } from "@happysanta/router";

// Init VK  Mini App

export const PAGE_MAIN = '/'
export const PAGE_CREATE = '/create'
export const PAGE_FRIENDS = '/friends'
export const PAGE_PROFILE = '/profile'
export const PAGE_PRODUCT_ITEM = '/product/:id'
// export const PAGE_PRODUCT_ITEM_RESULT = '/product/:id/result'

export const PANEL_MAIN = 'panel_main'
export const PANEL_CREATE = 'panel_create'
export const PANEL_FRIENDS = 'panel_friends'
export const PANEL_PROFILE = 'panel_profile'
export const PANEL_PRODUCT_ITEM = 'panel_product_item'
// export const PANEL_PRODUCT_ITEM_RESULT = 'panel_product_result'

export const VIEW_MAIN = 'view_main'
export const VIEW_CREATE = 'view_create'
export const VIEW_FRIENDS = 'view_friends'
export const VIEW_PRODUCT_ITEM = 'view_product_item'
// export const VIEW_PRODUCT_ITEM_RESULT = 'view_product_item_result'
export const VIEW_PROFILE = 'view_profile'



const routes = {
  [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
  [PAGE_CREATE]: new Page(PANEL_CREATE, VIEW_MAIN),
  [PAGE_FRIENDS]: new Page(PANEL_FRIENDS, VIEW_MAIN),
  [PAGE_PROFILE]: new Page(PANEL_PROFILE, VIEW_MAIN),
  [PAGE_PRODUCT_ITEM]: new Page(PANEL_PRODUCT_ITEM, VIEW_MAIN),
//   [PAGE_PRODUCT_ITEM_RESULT]: new Page(PANEL_PRODUCT_ITEM_RESULT, VIEW_MAIN)
}

const router = new Router(routes)

router.onEnterPage(PAGE_MAIN, () => {
	console.log('переход на главную страницу');
});

router.onEnterPage(PAGE_PRODUCT_ITEM, (route) => {
	const { id } = route.getParams();
	console.log('Переход на страницу товара', id);
});

router.on('update', (nextRote, oldRoute) => {
	nextRote.getPageId() // /product/:id([0-9]+)
	nextRote.getParams() // { id: "12" }
	nextRote.getPanelId() // panel_product
	nextRote.getViewId() // view_main
	nextRote.getLocation() // /product/12
	nextRote.isModal() // false
	nextRote.isPopup() // false
	nextRote.hasOverlay() // false

	if (oldRoute) {
		console.log(`move from page ${oldRoute.getLocation()} -> ${nextRote.getLocation()}`);
	} else {
		console.log(`enter to page ${nextRote.getLocation()}`);
	}
});

router.start()

bridge.send("VKWebAppInit");

ReactDOM.render(<RouterContext.Provider value={router}>
  <App />
</RouterContext.Provider>, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
