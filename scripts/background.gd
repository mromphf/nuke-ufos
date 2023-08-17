extends Node2D

@export var star_scene: PackedScene

func _tick():
	$StarPath/StarSpawn.progress = randi()

	var star = star_scene.instantiate()
	star.position = $StarPath/StarSpawn.position

	add_child(star)
