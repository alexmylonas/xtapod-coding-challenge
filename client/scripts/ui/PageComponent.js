
function PageComponent(bind,args) {

  bind(this);

  // Usage: fs.mix(parent, ComponentPath, Arguments)
  // fs.mix is the most basic way to nest components
// s.mix(this,'ui/ExampleA');
  fs.mix(this, 'ui/Sidebar');
  fs.mix(this, 'ui/Main');
  fs.mix(this,'ui/TopBar');
  fs.mix(this, 'ui/MainContent');
  fs.mix(this, 'ui/Queue');
  
  // fs.mix(this,'ui/ExampleB');
  // Usage: fs.mixAppend(domElementReference, ComponentPath, Arguments)
  // fs.mixAppend is similar to fs.mix except you can add component to a dom element
  // fs.mixAppend($('.appended-elements',this.dom),'ui/AppendedExample', {text: 'some text'});
  // fs.mixAppend($('.appended-elements',this.dom),'ui/AppendedExample');
  // fs.mixAppend($('.appended-elements',this.dom),'ui/AppendedExample');

  // // Mixlists are essentially the same as mixAppend but they're more managed (allows for sorting, deleting, etc)
  // this.list = fs.mixList(this,'.mix-list');
  // this.add();
}
module.exports = PageComponent;

