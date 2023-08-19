extends Area2D

signal hit
signal burn

@export var laser: PackedScene
var _SPEED = 400
var _hp = 3
var ammo = 3
var fuel = 100

func ammo_up():
	ammo = min(3, ammo + 1)


func on_death():
	queue_free()


func _unhandled_input(_event):
	if Input.is_action_just_pressed(&"fire") and ammo > 0:
		ammo -= 1
		var l = laser.instantiate()
		l.connect(&"despawned", ammo_up)
		l.global_position = $Gun.global_position
		get_parent().add_child(l)
		Soundboard.play($Laser)


func _speed():
	if Input.is_action_pressed(&"speed") and fuel > 0:
		fuel -= 1
		emit_signal(&"burn")
		return _SPEED * 2
	return _SPEED


func _process(delta):
	var velocity = Vector2.ZERO

	if Input.is_action_pressed(&"move_up"):
		velocity.y -= 1
	if Input.is_action_pressed(&"move_down"):
		velocity.y += 1
	if Input.is_action_pressed(&"move_left"):
		velocity.x -= 1
	if Input.is_action_pressed(&"move_right"):
		velocity.x += 1

	if velocity.length() > 0:
		velocity = velocity.normalized() * _speed()

	position += velocity * delta


func _on_collide(_body):
	_hp -= 1
	emit_signal(&"hit")
	if _hp <= 0:
		on_death()
