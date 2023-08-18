extends Enemy

var _VELOCITY: Vector2 = Vector2(0, 2)

func _process(_delta):
	rotate(PI / 180)
	position += _VELOCITY
	if position.y >= 1005:
		print("UFO despawned")
		queue_free()

func _on_collide(_body):
	if _body is Laser:
		Soundboard.play($Boom)
		queue_free()

func _ready():
	$Sprite.play()
