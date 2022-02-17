def build_trie(*words):
    arbol = {}
    for palabra in words:
        nodo = arbol
        if palabra == "":
            palabra = {}
            return arbol
        for letra in palabra:
            #sumar la palabra anterior al nodo
            print(letra)
            if letra in nodo:
                letra = letra+1
                nodo[letra].update(palabra)
                nodo[letra].update(palabra[letra])
            else:
                print(len(letra)-1)
                nodo[letra] = palabra[len(letra)]
            nodo = nodo[letra]
    return arbol
