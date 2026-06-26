'use client';

import { useState } from 'react';
import { communityPosts } from '@/lib/sample-data';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function CommunityPage() {
  const [newPost, setNewPost] = useState('');

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Community</h1>

      <div className="max-w-2xl mx-auto">
        {/* Create Post */}
        <div className="border rounded-lg p-6 mb-8">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts with the community..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows={4}
          />
          <div className="mt-4 flex justify-end gap-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-secondary transition text-sm font-medium">
              Cancel
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition text-sm font-medium">
              Post
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {communityPosts.map((post) => (
            <div key={post.id} className="border rounded-lg p-6 hover:border-primary transition">
              {/* Post Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600"
                  style={{
                    backgroundImage: `url(${post.avatar})`,
                    backgroundSize: 'cover',
                  }}
                />
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-muted-foreground mb-4">{post.content}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary px-2 py-1 rounded text-primary hover:bg-primary/10 cursor-pointer transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Post Actions */}
              <div className="flex gap-6 pt-4 border-t text-muted-foreground">
                <button className="flex items-center gap-2 hover:text-primary transition text-sm">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-primary transition text-sm">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.replies}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-primary transition text-sm">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
