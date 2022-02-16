function buildTrie(...palabras) {
    let arbol = {};
    for (let palabra of palabras) {
      console.log(palabra)
      if(palabra === "")
        //si word es igual a "" añade el nodo al arbol
        palabra = {};
        else{
        for (let letras of palabra) {
          console.log(letras)
          arbol[letras] = {};
          console.log(arbol)
        }
        }
    }
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
   
