!function(e){CKEDITOR.config.jqueryOverrideVal="undefined"==typeof CKEDITOR.config.jqueryOverrideVal||CKEDITOR.config.jqueryOverrideVal,void 0!==e&&(e.extend(e.fn,{ckeditorGet:function(){var e=this.eq(0).data("ckeditorInstance");if(!e)throw"CKEditor is not initialized yet, use ckeditor() with a callback.";return e},ckeditor:function(t,n){if(!CKEDITOR.env.isCompatible)throw Error("The environment is incompatible.");if(!e.isFunction(t))var i=n,n=t,t=i;var r=[],n=n||{};this.each(function(){var i=e(this),a=i.data("ckeditorInstance"),o=i.data("_ckeditorInstanceLock"),c=this,d=new e.Deferred;r.push(d.promise()),a&&!o?(t&&t.apply(a,[this]),d.resolve()):o?a.once("instanceReady",function(){setTimeout(function(){a.element?(a.element.$==c&&t&&t.apply(a,[c]),d.resolve()):setTimeout(arguments.callee,100)},0)},null,null,9999):((n.autoUpdateElement||"undefined"==typeof n.autoUpdateElement&&CKEDITOR.config.autoUpdateElement)&&(n.autoUpdateElementJquery=!0),n.autoUpdateElement=!1,i.data("_ckeditorInstanceLock",!0),a=e(this).is("textarea")?CKEDITOR.replace(c,n):CKEDITOR.inline(c,n),i.data("ckeditorInstance",a),a.on("instanceReady",function(n){var r=n.editor;setTimeout(function(){if(r.element){if(n.removeListener(),r.on("dataReady",function(){i.trigger("dataReady.ckeditor",[r])}),r.on("setData",function(e){i.trigger("setData.ckeditor",[r,e.data])}),r.on("getData",function(e){i.trigger("getData.ckeditor",[r,e.data])},999),r.on("destroy",function(){i.trigger("destroy.ckeditor",[r])}),r.on("save",function(){return e(c.form).submit(),!1},null,null,20),r.config.autoUpdateElementJquery&&i.is("textarea")&&e(c.form).length){var a=function(){i.ckeditor(function(){r.updateElement()})};e(c.form).submit(a),e(c.form).bind("form-pre-serialize",a),i.bind("destroy.ckeditor",function(){e(c.form).unbind("submit",a),e(c.form).unbind("form-pre-serialize",a)})}r.on("destroy",function(){i.removeData("ckeditorInstance")}),i.removeData("_ckeditorInstanceLock"),i.trigger("instanceReady.ckeditor",[r]),t&&t.apply(r,[c]),d.resolve()}else setTimeout(arguments.callee,100)},0)},null,null,9999))});var a=new e.Deferred;return this.promise=a.promise(),e.when.apply(this,r).then(function(){a.resolve()}),this.editor=this.eq(0).data("ckeditorInstance"),this}}),CKEDITOR.config.jqueryOverrideVal&&(e.fn.val=CKEDITOR.tools.override(e.fn.val,function(t){return function(n){if(arguments.length){var i=this,r=[],a=this.each(function(){var i=e(this),a=i.data("ckeditorInstance");if(i.is("textarea")&&a){var o=new e.Deferred;return a.setData(n,function(){o.resolve()}),r.push(o.promise()),!0}return t.call(i,n)});if(r.length){var o=new e.Deferred;return e.when.apply(this,r).done(function(){o.resolveWith(i)}),o.promise()}return a}var a=e(this).eq(0),c=a.data("ckeditorInstance");return a.is("textarea")&&c?c.getData():t.call(a)}})))}(window.jQuery);