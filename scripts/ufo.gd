extends Enemy

var _VELOCITY: Vector2 = Vector2(0, 2)

func _despawn():
	queue_free()

func _process(_delta):
	rotate(PI / 180)
	position += _VELOCITY
	if position.y >= 1005:
		print("UFO despawned")
		queue_free()

func _on_collide(_body):
	if _body is Laser:
		hide()
		Soundboard.play($Boom)
		$Despawn.start()

func _ready():
	$Sprite.play()
