define(['app'], function(app) {
	var $$ = Dom7;

	function render(params) {
		$$('.home-page').html(app.tplMng.renderTplById('home',{ model: params.model, isData: params.isData}));
		bindEvents(params.bindings);
	}
  
  function reRender(params) {
    $$('.home-page').html(app.tplMng.renderTplById('home',{ model: params.model, isData: params.isData}));
		bindEvents(params.bindings);
  }

	function bindEvents(bindings) {
    console.log(bindings);
		for (var i in bindings) {
      $$(bindings[i].element).off(bindings[i].event);
			$$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}

	return {
		render: render,
    reRender:reRender
	}
});