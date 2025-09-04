from django.http import JsonResponse

def chat_response(request):
    return JsonResponse({"message": "Hello from Django Backend! This will connect with LLM later."})
