function buildTrie(...palabras) {
    let arbol = {};
    let nodo = arbol;
    for (let palabra of palabras){
      if(palabra === "")
        //si palabra es igual a "" añade el nodo al arbol
        palabra = {};
      else{
      for (let i = 0; i < palabra.length; i++) {
        console.log(i)
        //si es diferente añade parte del arbol con el nodo
        if (!arbol[palabra[i]]) {
          arbol[palabra[i]] = {};
        }
        nodo = nodo[palabra[i]];
      }
    }};
  return arbol;
}

    // describe("Example Tests", function(){
    //     it("should work with example tests", function(){
    //       Test.assertDeepEquals(buildTrie(), {});
    //       Test.assertDeepEquals(buildTrie("", ), {});
    //       Test.assertDeepEquals(buildTrie("trie"), {'t': {'tr': {'tri': {'trie': null}}}});
    //       Test.assertDeepEquals(buildTrie("tree"), {'t': {'tr': {'tre': {'tree': null}}}});
    //       Test.assertDeepEquals(buildTrie("trie", "trie"), {'t': {'tr': {'tri': {'trie': null}}}});
    //       Test.assertDeepEquals(buildTrie("A","to", "tea", "ted", "ten", "i", "in", "inn"), {'A': null, 't': {'to': null, 'te': {'tea': null, 'ted': null, 'ten': null}}, 'i': {'in': {'inn': null}}});
    //       Test.assertDeepEquals(buildTrie("true", "trust"), {'t': {'tr': {'tru': {'true': null, 'trus': {'trust': null}}}}});
    //     });
    //   });     
   
