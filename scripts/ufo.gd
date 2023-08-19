extends Area2D

var _VELOCITY: Vector2 = Vector2(0, 2)
var _hp = 2

func _process(_delta):
	rotate(PI / 180)
	position += _VELOCITY
	if position.y >= 1005:
		print("UFO despawned")
		queue_free()

func _on_collide(_body):
	_hp -= 1
	if _hp <= 0:
		queue_free()

func _ready():
	$Sprite.play()
