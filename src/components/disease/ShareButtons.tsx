"use client";

import { useState } from "react";

import { Check, Copy, Share2 } from "lucide-react";

import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";

  const shareData = {
    title,
    text: `Learn about ${title}`,
    url,
  };

  const handleNativeShare = async () => {
    if (!navigator.share) return;

    try {
      await navigator.share(shareData);
    } catch {}
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const whatsapp = `https://wa.me/?text=${encodeURIComponent(
    `${title}\n${url}`,
  )}`;

  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url,
  )}`;

  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title,
  )}&url=${encodeURIComponent(url)}`;

  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url,
  )}`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {typeof navigator !== "undefined" && "share" in navigator && (
        <Button
          size="icon"
          variant="outline"
          onClick={handleNativeShare}
          aria-label="Share"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      )}

      <Button asChild size="icon" variant="outline">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="h-4 w-4 text-green-600" />
        </a>
      </Button>

      <Button asChild size="icon" variant="outline">
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="h-4 w-4 text-blue-600" />
        </a>
      </Button>

      <Button asChild size="icon" variant="outline">
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
        >
          <FaXTwitter className="h-4 w-4" />
        </a>
      </Button>

      <Button asChild size="icon" variant="outline">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin className="h-4 w-4 text-sky-700" />
        </a>
      </Button>

      <Button
        size="icon"
        variant="outline"
        onClick={copyLink}
        aria-label="Copy Link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
