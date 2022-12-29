package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
)

type Data struct {
	Data []Music
}
type Music struct {
	Id            string
	Types         string
	Relationships []Relation
}
type Relation struct {
	Tracks []Track
}
type Track struct {
	Href string
}

func main() {
	raw, err := ioutil.ReadFile("./data.json")
	_ = err

	var d Data
	json.Unmarshal(raw, &d)

	fmt.Println(d)
}
