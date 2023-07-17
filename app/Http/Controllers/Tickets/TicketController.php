<?php

namespace App\Http\Controllers\Tickets;

use App\Http\Controllers\Controller;
use App\Http\Repos\Ticket\GetTicket;
use App\Http\Repos\Ticket\PostTicket;
use App\Http\Requests\PostTicketRequest;
use Illuminate\Http\Request;

class TicketController extends Controller
{

    public function index(GetTicket $getTicket)
    {
        return inertia('Tickets/Index', [
            'tickets' => $getTicket->GetUserTickets(),
            'query' => []
        ]);
    }
    public function create()
    {
        return inertia('Tickets/Create');
    }

    public function show(GetTicket $getTicket, $ticket)
    {
        return inertia('Tickets/Show', [
            'ticket' => $getTicket->GetTicket($ticket)
        ]);
    }

    public function store(PostTicketRequest $request, PostTicket $postTicket)
    {
        $ticket = $postTicket->StoreTicket($request);
        return redirect()->back()->with('success', 'Ticket created successfully');
    }
}
