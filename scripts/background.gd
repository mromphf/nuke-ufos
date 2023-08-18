extends Node2D

@export var star_scene: PackedScene
var _NUM_STARS = 20

func _tick():
	$StarPath/StarSpawn.progress = randi()

	var star = star_scene.instantiate()
	star.position = $StarPath/StarSpawn.position

	add_child(star)


func _ready():
	var screen_size = get_viewport_rect().size

	for x in range(0, _NUM_STARS):
		var star = star_scene.instantiate()
		star.position = Vector2( \
			randf_range(0, screen_size.x), \
			randf_range(0, screen_size.y))
		add_child(star)
