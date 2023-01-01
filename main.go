package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
)

type jsonstruct struct {
	X string
	Y int
	J []string
}

func main() {

	helloHandler := func(w http.ResponseWriter, req *http.Request) {
		io.WriteString(w, "Hello, World\n")
	}

	jsonHandler := func(w http.ResponseWriter, req *http.Request) {

		w.Header().Add("Content-Type", "application/json charset=utf8")

		jsons := &jsonstruct{
			X: "named",
			Y: 1,
			J: []string{"a", "b", "c"},
		}

		i, err := json.Marshal(jsons)

		if err != nil {
			panic(err)
		}

		io.WriteString(w, string(i))
	}

	http.HandleFunc("/", jsonHandler)
	http.HandleFunc("/hello", helloHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
